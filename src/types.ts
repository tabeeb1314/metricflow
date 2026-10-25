export type TimeRange = '7d' | '30d' | '90d';

export type MetricType = 'mrr' | 'retention' | 'conversion' | 'cac';

export interface DataPoint {
  date: string;
  value: number;
  secondaryValue?: number;
  deltaPercent: number;
}

export interface MetricSummary {
  id: MetricType;
  label: string;
  currentDisplay: string;
  changeDisplay: string;
  isPositive: boolean;
  benchmark: string;
  insight: string;
}

export interface ChannelShare {
  channel: string;
  percentage: number;
  amountDisplay: string;
  colorClass: string;
}

export interface PricingPlan {
  id: 'starter' | 'growth' | 'scale';
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  popular?: boolean;
  features: string[];
  limits: {
    dataSources: string;
    refreshRate: string;
    teamMembers: string;
    historyDepth: string;
  };
  ctaLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TourStep {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  highlightMetric: string;
  insightText: string;
  badgeText: string;
}

export interface DemoFormState {
  fullName: string;
  workEmail: string;
  companySize: string;
  selectedPlan: string;
  primaryGoal: string;
}
