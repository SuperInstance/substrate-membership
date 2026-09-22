// substrate-membership: type declarations for the MEMBERSHIP opcode (R10).

export interface Bundle {
  id: string;
  name?: string;
  members: string[];
  /** Append-only add history; once added, an observation stays a lifetime member. */
  append_history?: string[];
  [key: string]: any;
}

export interface MembershipResult {
  bundle_id: string;
  bundle_name: string | undefined;
  observation_id: string;
  is_current_member: boolean;
  is_lifetime_member: boolean;
  current_member_count: number;
}

/**
 * Tests whether an observation is a (present/past) member of a bundle,
 * across current and lifetime (append-only) slices.
 * Throws if the bundle has no id or members is not an array.
 */
export declare function membershipIn(bundle: Bundle, observationId: string): MembershipResult;
