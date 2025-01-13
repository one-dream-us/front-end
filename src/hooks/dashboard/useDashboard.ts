import { useState } from 'react';

export default function useDashboard() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  return { showOnboarding, setShowOnboarding };
}
