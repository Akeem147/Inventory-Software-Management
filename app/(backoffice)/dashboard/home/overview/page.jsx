import ActivitySummary from '@/components/dashboard/ActivitySummary'
import DashboardBanner from '@/components/dashboard/DashboardBanner'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <DashboardBanner/>
      <ActivitySummary/>
    </div>
  )
}
