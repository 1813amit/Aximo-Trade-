
"use client";

import { TokenTable } from './TokenTable';
import { FINAL_STRETCH_DATA } from '../../lib/mock-data';

export function FinalStretchTable() {
  return (
    <TokenTable
      dataSource={FINAL_STRETCH_DATA}
      title="Final Stretch"
      isFinalStretchTable={true}
    />
  );
}
