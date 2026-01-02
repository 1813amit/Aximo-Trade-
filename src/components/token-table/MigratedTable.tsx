
"use client";

import { TokenTable } from './TokenTable';
import { MIGRATED_DATA } from '../../lib/mock-data';

export function MigratedTable() {
  return (
    <TokenTable
      dataSource={MIGRATED_DATA}
      title="Migrated"
      isMigratedTable={true}
    />
  );
}
