export type UserRole = 'player' | 'parent' | 'coach' | 'admin'

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  role: UserRole
  createdAt: string
}

export interface Program {
  id: string
  name: string
  description: string
  ageGroup: string
  schedule: string
}
