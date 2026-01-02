
"use client";

import { TokenTable } from './TokenTable';
import { NEW_PAIRS_DATA } from '../../lib/mock-data';


export function NewPairsTable() {
  return (
    <TokenTable
      dataSource={NEW_PAIRS_DATA}
      title="New Pairs"
    />
  );
}
