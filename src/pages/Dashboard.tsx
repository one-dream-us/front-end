import useDashboard from '@/hooks/dashboard/useDashboard';
import OnBoarding from '@/components/dashboard/Onboarding';

export default function Dashboard() {
  const { showOnboarding, setShowOnboarding } = useDashboard();

  return (
    <div>
      <OnBoarding showOnboarding={showOnboarding} setShowOnboarding={setShowOnboarding} />
    </div>
  );
}
