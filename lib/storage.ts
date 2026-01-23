export type Therapist = {
  id: string;
  name: string;
  active: boolean;
};

const KEY = "hara_therapists_v1";

export function loadTherapists(): Therapist[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data;
  } catch {
    return [];
  }
}

export function saveTherapists(list: Therapist[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function seedTherapistsIfEmpty(defaultNames: string[]) {
  const current = loadTherapists();
  if (current.length > 0) return current;

  const seeded: Therapist[] = defaultNames.map((name) => ({
    id: crypto.randomUUID(),
    name,
    active: true,
  }));

  saveTherapists(seeded);
  return seeded;
}
