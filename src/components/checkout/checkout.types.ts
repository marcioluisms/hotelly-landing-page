export type PlanSlug = 'starter' | 'professional' | 'enterprise';

export type ModalSource = 'hero' | 'pricing' | 'footer' | 'header';

export type ModalStatus = 'idle' | 'validating' | 'submitting' | 'error';

export interface PlanInfo {
  slug: PlanSlug;
  name: string;
  price: string;
  badgeClass: string;
}

export const PLAN_MAP: Record<PlanSlug, PlanInfo> = {
  starter: {
    slug: 'starter',
    name: 'Hotelly Start',
    price: 'R$ 349',
    badgeClass: 'bg-brand-sky/20 text-brand-sky',
  },
  professional: {
    slug: 'professional',
    name: 'Hotelly Pro',
    price: 'R$ 549',
    badgeClass: 'bg-amber/20 text-amber',
  },
  enterprise: {
    slug: 'enterprise',
    name: 'Hotelly Max',
    price: 'R$ 849',
    badgeClass: 'bg-brand-emerald/20 text-brand-emerald',
  },
};
