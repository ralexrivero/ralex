import React from 'react';
import { Navigate } from 'react-router-dom';
import { Feature, useFeatures } from '../context/FeaturesContext';

interface FeatureGuardProps {
  feature: Feature;
  children: React.ReactNode;
}

export const FeatureGuard: React.FC<FeatureGuardProps> = ({ feature, children }) => {
  const { isEnabled } = useFeatures();

  if (!isEnabled(feature)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};