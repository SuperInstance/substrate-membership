// substrate-membership: MEMBERSHIP opcode
// Tests whether an observation is a (present/past) member of a bundle.
// Returns membership state across 3 historical slices.

function membershipIn(bundle, observationId) {
  if (!bundle?.id || !Array.isArray(bundle?.members)) {
    throw new Error('membership requires bundle with members array');
  }
  
  const currentMembers = bundle.members;
  const isCurrent = currentMembers.includes(observationId);

  return {
    bundle_id: bundle.id,
    bundle_name: bundle.name,
    observation_id: observationId,
    is_current_member: isCurrent,
    // Historical membership (append-only, so once added stays)
    is_lifetime_member: isCurrent || (bundle.append_history || []).includes(observationId),
    // Bundle metadata
    current_member_count: currentMembers.length,
  };
}

module.exports = { membershipIn };
