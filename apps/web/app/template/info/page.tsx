// **DO NOT EDIT. This is a template resource.**
import React from 'react'

import { AppSidebar } from '@/components/template/app-sidebar.tsx'
import { ChartAreaInteractive } from '@/components/template/chart-area-interactive.tsx'
import { DataTable } from '@/components/template/data-table.tsx'
import { SectionCards } from '@/components/template/section-cards.tsx'
import { SiteHeader } from '@/components/template/site-header.tsx'
import { SidebarInset, SidebarProvider } from '@workspace/ui/components/sidebar'

import data from './data.json'

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
