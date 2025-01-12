import { useState } from 'react';

export default function useDashboard() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return { showOnboarding, setShowOnboarding };
}
