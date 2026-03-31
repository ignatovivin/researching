import { Suspense, lazy } from 'react'

const MarketsPrimary = lazy(() => import('./markets/MarketsPrimary'))
const MarketsSecondary = lazy(() => import('./markets/MarketsSecondary'))
const MarketsEmerging = lazy(() => import('./markets/MarketsEmerging'))

const primaryTabs = new Set(['fitness', 'medicine', 'gaming', 'beauty', 'events', 'education', 'insurance'])
const secondaryTabs = new Set(['autoservices', 'home', 'eldercare', 'travel'])

function MarketsPage({ activeTab }) {
  return (
    <Suspense fallback={<section className="panel section-panel medicine-panel"><p className="subtitle">Загрузка раздела...</p></section>}>
      {primaryTabs.has(activeTab) ? (
        <MarketsPrimary activeTab={activeTab} />
      ) : secondaryTabs.has(activeTab) ? (
        <MarketsSecondary activeTab={activeTab} />
      ) : (
        <MarketsEmerging activeTab={activeTab} />
      )}
    </Suspense>
  )
}

export default MarketsPage
