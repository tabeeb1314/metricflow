import React, { useState, useMemo, useRef } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Download, 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  AlertCircle,
  RefreshCw,
  Info
} from 'lucide-react';
import { MetricType, TimeRange, DataPoint } from '../types';
import { METRIC_SUMMARIES, TIME_SERIES_DATA, CHANNEL_ATTRIBUTION } from '../data/mockData';

export const InteractiveDashboard: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('mrr');
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');
  const [simulateSpike, setSimulateSpike] = useState(false);
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Derive active dataset
  const rawData = TIME_SERIES_DATA[selectedMetric][timeRange];
  
  const activeData: DataPoint[] = useMemo(() => {
    if (!simulateSpike) return rawData;
    // Inject a simulated anomaly spike in the 2nd to last data point
    return rawData.map((pt, idx) => {
      if (idx === rawData.length - 2) {
        const spikeMultiplier = selectedMetric === 'cac' ? 0.75 : 1.25;
        return {
          ...pt,
          value: Math.round(pt.value * spikeMultiplier * 10) / 10,
          deltaPercent: selectedMetric === 'cac' ? -18.2 : +24.6,
        };
      }
      return pt;
    });
  }, [rawData, simulateSpike, selectedMetric]);

  const activeSummary = METRIC_SUMMARIES[selectedMetric];

  // SVG Chart Dimensions & Math
  const chartWidth = 720;
  const chartHeight = 260;
  const padding = { top: 24, right: 24, bottom: 32, left: 24 };

  const usableWidth = chartWidth - padding.left - padding.right;
  const usableHeight = chartHeight - padding.top - padding.bottom;

  const minVal = useMemo(() => {
    const min = Math.min(...activeData.map((d) => d.value));
    return min * 0.95;
  }, [activeData]);

  const maxVal = useMemo(() => {
    const max = Math.max(...activeData.map((d) => d.value));
    return max * 1.05;
  }, [activeData]);

  // Generate SVG coordinates
  const coordinates = useMemo(() => {
    return activeData.map((d, i) => {
      const x = padding.left + (i / (activeData.length - 1)) * usableWidth;
      const normalizedY = (d.value - minVal) / (maxVal - minVal || 1);
      const y = padding.top + usableHeight - normalizedY * usableHeight;
      return { x, y, data: d };
    });
  }, [activeData, minVal, maxVal, usableWidth, usableHeight, padding.left, padding.top]);

  // Construct SVG Path
  const linePath = useMemo(() => {
    if (coordinates.length === 0) return '';
    return coordinates.reduce((path, coord, idx) => {
      if (idx === 0) return `M ${coord.x} ${coord.y}`;
      // Smooth curve interpolation
      const prev = coordinates[idx - 1];
      const cx = (prev.x + coord.x) / 2;
      return `${path} C ${cx} ${prev.y}, ${cx} ${coord.y}, ${coord.x} ${coord.y}`;
    }, '');
  }, [coordinates]);

  const areaPath = useMemo(() => {
    if (coordinates.length === 0) return '';
    const first = coordinates[0];
    const last = coordinates[coordinates.length - 1];
    return `${linePath} L ${last.x} ${padding.top + usableHeight} L ${first.x} ${padding.top + usableHeight} Z`;
  }, [linePath, coordinates, padding.top, usableHeight]);

  // Handle client-side CSV export
  const handleExportCSV = () => {
    setIsExporting(true);
    setTimeout(() => {
      const headers = 'Date,Metric,Value,DeltaPercent\n';
      const rows = activeData
        .map((d) => `"${d.date}","${activeSummary.label}",${d.value},"${d.deltaPercent}%"`)
        .join('\n');
      const csvContent = 'data:text/csv;charset=utf-8,' + headers + rows;
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `metricflow_${selectedMetric}_${timeRange}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsExporting(false);
    }, 300);
  };

  const hoveredCoord = hoveredPointIndex !== null ? coordinates[hoveredPointIndex] : null;

  return (
    <section id="interactive-demo" className="py-20 sm:py-28 bg-[#090d16] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-400 mb-2">
            <span>Interactive Product Sandbox</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Simulated Sample Data</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Experience clear business intelligence without the learning curve.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Interact with live dataset switches, time horizons, and variance models. Notice how scattered operational numbers resolve into plain-English decision briefs.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div 
          ref={containerRef}
          className="bg-[#0c121e] border border-slate-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-200"
        >
          {/* Top Workbench Header Bar */}
          <div className="px-5 py-4 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-4 bg-slate-900/50">
            {/* View Breadcrumb / Title */}
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <div className="text-xs sm:text-sm font-semibold text-white">
                Live Analytics Workbench
              </div>
              <span className="hidden sm:inline text-xs text-slate-500">|</span>
              <span className="hidden sm:inline text-xs text-slate-400">Sample Company Workspace</span>
            </div>

            {/* Interactive Horizon Filter & Controls */}
            <div className="flex items-center flex-wrap gap-2.5">
              {/* Anomaly simulation toggle */}
              <button
                type="button"
                onClick={() => setSimulateSpike(!simulateSpike)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                  simulateSpike 
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' 
                    : 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:text-white'
                }`}
                title="Inject a sudden cohort surge to observe automated insight adaptation"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{simulateSpike ? 'Variance Injected' : 'Simulate Anomaly'}</span>
              </button>

              {/* Time Range Filter (Segmented Buttons) */}
              <div className="flex items-center bg-slate-900/90 p-1 rounded-lg border border-slate-800" role="tablist" aria-label="Date Range">
                {(['7d', '30d', '90d'] as TimeRange[]).map((range) => {
                  const labels: Record<TimeRange, string> = {
                    '7d': '7 Days',
                    '30d': '30 Days',
                    '90d': 'Quarter',
                  };
                  const active = timeRange === range;
                  return (
                    <button
                      key={range}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {labels[range]}
                    </button>
                  );
                })}
              </div>

              {/* CSV Export Button */}
              <button
                onClick={handleExportCSV}
                disabled={isExporting}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400 disabled:opacity-50"
                aria-label="Download sample report in CSV format"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>{isExporting ? 'Generating...' : 'Export CSV'}</span>
              </button>
            </div>
          </div>

          {/* Metric Selector Strip (4 Core Metrics) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-slate-800 divide-x divide-y lg:divide-y-0 divide-slate-800/80 bg-[#090d16]/70">
            {(['mrr', 'retention', 'conversion', 'cac'] as MetricType[]).map((metricKey) => {
              const item = METRIC_SUMMARIES[metricKey];
              const isSelected = selectedMetric === metricKey;
              return (
                <button
                  key={metricKey}
                  type="button"
                  onClick={() => {
                    setSelectedMetric(metricKey);
                    setHoveredPointIndex(null);
                  }}
                  className={`p-4 sm:p-5 text-left transition-all relative group focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isSelected ? 'bg-slate-800/40' : 'hover:bg-slate-800/20'
                  }`}
                >
                  {/* Subtle active top highlight border */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky-400" />
                  )}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-medium truncate">{item.label}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-sky-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-600'}`} />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight tabular-nums mb-1">
                    {simulateSpike && metricKey === selectedMetric 
                      ? metricKey === 'cac' ? '$138' : metricKey === 'mrr' ? '$53,400' : item.currentDisplay
                      : item.currentDisplay}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    {item.isPositive ? (
                      <span className="text-emerald-400 font-medium flex items-center gap-0.5">
                        <TrendingUp className="w-3 h-3" />
                        {simulateSpike && metricKey === selectedMetric ? '+24.6%' : item.changeDisplay}
                      </span>
                    ) : (
                      <span className="text-rose-400 font-medium flex items-center gap-0.5">
                        <TrendingDown className="w-3 h-3" />
                        {item.changeDisplay}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Chart Canvas & Breakdown Body */}
          <div className="p-5 sm:p-8 space-y-8">
            {/* Chart Area */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{activeSummary.label} Trend</span>
                  <span>·</span>
                  <span className="tabular-nums">Horizon: {timeRange.toUpperCase()}</span>
                  {simulateSpike && (
                    <span className="text-amber-400 font-medium">(Simulated Variance Active)</span>
                  )}
                </div>
                <div className="text-slate-500 hidden sm:block">
                  Hover chart points for date & delta inspection
                </div>
              </div>

              {/* Native Responsive SVG Chart */}
              <div className="relative w-full aspect-[21/9] min-h-[220px] max-h-[340px] bg-slate-900/40 rounded-lg border border-slate-800/80 p-2 sm:p-4 overflow-hidden">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guideline Grids */}
                  {[0.25, 0.5, 0.75].map((fraction, idx) => {
                    const y = padding.top + usableHeight * fraction;
                    return (
                      <line
                        key={idx}
                        x1={padding.left}
                        y1={y}
                        x2={chartWidth - padding.right}
                        y2={y}
                        stroke="rgba(255, 255, 255, 0.05)"
                        strokeDasharray="4 4"
                      />
                    );
                  })}

                  {/* Area fill */}
                  <path d={areaPath} fill="url(#chartGradient)" />

                  {/* Stroke Line */}
                  <path
                    d={linePath}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Interactive Nodes and Hit Targets */}
                  {coordinates.map((coord, idx) => {
                    const isHovered = hoveredPointIndex === idx;
                    return (
                      <g key={idx}>
                        {/* Hover vertical guide line */}
                        {isHovered && (
                          <line
                            x1={coord.x}
                            y1={padding.top}
                            x2={coord.x}
                            y2={padding.top + usableHeight}
                            stroke="#38bdf8"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                            opacity="0.7"
                          />
                        )}

                        {/* Visible Data Point Node */}
                        <circle
                          cx={coord.x}
                          cy={coord.y}
                          r={isHovered ? 5.5 : 3}
                          fill={isHovered ? '#38bdf8' : '#0c121e'}
                          stroke="#38bdf8"
                          strokeWidth={isHovered ? 2 : 1.5}
                          className="transition-all duration-150 pointer-events-none"
                        />

                        {/* Transparent touch/mouse hitbox */}
                        <rect
                          x={coord.x - (usableWidth / coordinates.length) / 2}
                          y={padding.top}
                          width={usableWidth / coordinates.length}
                          height={usableHeight}
                          fill="transparent"
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredPointIndex(idx)}
                          onTouchStart={() => setHoveredPointIndex(idx)}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Floating Interactive Tooltip */}
                {hoveredCoord && (
                  <div
                    className="absolute pointer-events-none z-20 px-3 py-2 bg-slate-900 border border-slate-700/90 rounded-md shadow-xl text-xs space-y-1 transition-all duration-75"
                    style={{
                      left: `${Math.min(Math.max((hoveredCoord.x / chartWidth) * 100, 12), 88)}%`,
                      top: '12%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div className="text-slate-400 font-medium">{hoveredCoord.data.date}</div>
                    <div className="font-bold text-white tabular-nums text-sm">
                      {selectedMetric === 'mrr' && `$${hoveredCoord.data.value.toLocaleString()}`}
                      {selectedMetric === 'retention' && `${hoveredCoord.data.value}%`}
                      {selectedMetric === 'conversion' && `${hoveredCoord.data.value}%`}
                      {selectedMetric === 'cac' && `$${hoveredCoord.data.value}`}
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium">
                      {hoveredCoord.data.deltaPercent >= 0 ? '+' : ''}
                      {hoveredCoord.data.deltaPercent}% variance
                    </div>
                  </div>
                )}
              </div>

              {/* X-Axis Timeline Labels */}
              <div className="flex justify-between items-center text-[11px] text-slate-500 font-mono pt-1 px-2">
                <span>{activeData[0]?.date}</span>
                <span className="hidden sm:inline">{activeData[Math.floor(activeData.length / 2)]?.date}</span>
                <span>{activeData[activeData.length - 1]?.date}</span>
              </div>
            </div>

            {/* Bottom Split: Channel Attribution & Automated Decision Insight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-slate-800">
              {/* Channel Attribution Breakdown (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Channel Attribution</span>
                  <span className="text-slate-400">Total: $42,850</span>
                </div>

                <div className="space-y-2.5">
                  {CHANNEL_ATTRIBUTION.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-300">{item.channel}</span>
                        <div className="flex items-center gap-2 tabular-nums">
                          <span className="text-slate-400">{item.amountDisplay}</span>
                          <span className="font-semibold text-white w-8 text-right">{item.percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.colorClass} rounded-full transition-all duration-300`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plain-English Decision & Anomaly Insight Card (7 cols) */}
              <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/90 rounded-lg p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-teal-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>MetricFlow Decision Intelligence</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">Automated brief</span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    {simulateSpike ? (
                      <span className="text-amber-200">
                        <strong>Simulated Anomaly Flagged:</strong> Unusually high velocity observed in organic conversions (+24.6%). Root cause traced to technical docs referral traffic; recommend immediate activation of onboarding sequence.
                      </span>
                    ) : (
                      activeSummary.insight
                    )}
                  </p>

                  <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{activeSummary.benchmark}</span>
                    </div>
                    <span className="text-slate-500">Confidence: 98.2%</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px]">Next automated scan: In 48 mins</span>
                  <span className="text-slate-500 italic">Demonstration Mode</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Demo Notice Note */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500">
            * All figures, company references, and channel streams displayed in this sandbox are synthetic demonstration models for portfolio review.
          </p>
        </div>

      </div>
    </section>
  );
};
