import React, { useState, useEffect } from 'react';
import * as serviceWorkerRegistration from '@/serviceWorkerRegistration';

interface PropTypes { // states
  Index: React.FC<any>
  props?: any
}

const Special: React.FC<PropTypes> = ({ Index, props }) => {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  const onUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorkerRegistration.register({ onUpdate });
    serviceWorkerRegistration.getRegistration(onUpdate);
  }, []);

  const states = {
    show: showReload && waitingWorker,
  };

  const methods = {
    handleUpdate: () => {
      waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
      setShowReload(false);
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  };

  return (
    <Index
      {...props}
      {...states}
      {...methods}
    />
  );
};

export default Special;