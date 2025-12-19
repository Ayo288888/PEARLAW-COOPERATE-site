import config from '@/payload.config'
import '@payloadcms/next/css'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
/* @ts-ignore */
import { importMap } from './admin/importMap'
import React from 'react'

type Args = {
  children: React.ReactNode
}

// This layout renders its own <html> and <body> tags.
// Ensure that app/layout.tsx is moved to a route group (e.g., app/(website)/layout.tsx)
// so that it doesn't wrap this layout, which would cause hydration errors.
const Layout = ({ children }: Args) => (
  <RootLayout
    config={config}
    importMap={importMap}
    serverFunction={async (args) => {
      'use server'
      return handleServerFunctions({ ...args, config, importMap })
    }}
  >
    {children}
  </RootLayout>
)

export default Layout