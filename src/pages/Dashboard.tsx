import useDashboard from '@/hooks/dashboard/useDashboard';
import OnBoarding from '@/components/dashboard/Onboarding';
import Banner from '@/components/dashboard/Banner';

export default function Dashboard() {
  const { showOnboarding, setShowOnboarding } = useDashboard();

  return (
    <div>
      <OnBoarding showOnboarding={showOnboarding} setShowOnboarding={setShowOnboarding} />
      <Banner />
    </div>
  );
}
