function DataTable({ table }) {
  return (
    <div className="table-wrap">
      <table className="data-table table-compact">
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, index) => (
            <tr key={`${index}-${row[0]}`}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ListCard({ title, items }) {
  return (
    <article className="summary-card">
      <p className="insight-title">{title}</p>
      <ul className="note-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

function isCompetitorSection(title) {
  const normalizedTitle = title.toLowerCase()

  return normalizedTitle.includes('competitive landscape') || normalizedTitle.includes('конкурент')
}

function shouldRenderTableFirst(title) {
  return (
    title === '3. Макроэкономический контекст и цифровая среда' ||
    title === '4. Ключевые платежные агенты и их модели' ||
    title === '5. Объемы и динамика потока' ||
    title === '6. Рабочие схемы переводов из России в Казахстан' ||
    title === '7. Регуляторные изменения и их влияние' ||
    title === '7A. Регуляторные сигналы по оплате зарубежных сервисов' ||
    title === '8. Что это значит для A3' ||
    title === '8A. Каналы оплаты зарубежных сервисов через Казахстан' ||
    title === '9. Возможности для A3 в Казахстане' ||
    title === '4. Работа 1: Раздел Дом / ЖКУ в мобильном банке' ||
    title === '5. Работа 2: ЕИРЦ / УК / РСО' ||
    title === '6. Работа 3: PSP / маркетплейс / суперапп' ||
    title === '7. Работа 4: Телеком / утилити' ||
    title === '8. Работа 5: SaaS / ERP / CRM' ||
    title === '9. Работа 6: МФО / кредиторы' ||
    title === '10. Работа 7: SMB' ||
    title === '11. Приоритизация работ JTBD' ||
    title === '12. Одностраничные офферы для топ-3 JTBD' ||
    title === '4. Неучтённые конкуренты: Город и Элекснет' ||
    title === '13. Сравнительная матрица атак' ||
    title === '13. Сигналы для исходящих продаж' ||
    title === '5. Юнит-экономика core-слоёв A3' ||
    title === '5. TAM' ||
    title === '5. Банки как главный сегмент' ||
    title === '4. Приоритетные сегменты для A3' ||
    title === '7. Recurring vs One-time' ||
    title === '9. Ценовая логика и готовность платить' ||
    title === '8. Рекомендации для A3' ||
    title === '9. Корзины решений' ||
    title === '9. Иллюстративные расчёты' ||
    title === '10. Рекомендации для A3' ||
    title === '10. Сегментная карта ценности' ||
    title === '11. A3 Recommendations' ||
    title === '5. Value Proposition' ||
    title === '6. Competitive Landscape'
  )
}

function shouldRenderSecondaryTable(title) {
  return title === '6. Margin' || title === '9. Иллюстративные расчёты'
}

function shouldRenderListsFullWidth(title) {
  return title === '9. Risks and Barriers'
}

function IndustryTab({
  heroTitle,
  heroText,
  cards,
  overviewCards,
  sections,
  statsAriaLabel,
  overviewAriaLabel,
  competitorsRef,
}) {
  return (
    <>
      <section className="hero medicine-hero">
        <div className="medicine-hero-content">
          <h1 className="hero-title medicine-hero-title">{heroTitle}</h1>
          <p className="subtitle medicine-hero-subtitle">{heroText}</p>
        </div>
      </section>

      <section className="kpi-grid medicine-stats-grid" aria-label={statsAriaLabel}>
        {cards.map((card) => (
          <article key={card.label} className="kpi-card medicine-stat-card">
            <div className="kpi-main">
              <p className="kpi-label medicine-stat-label">{card.label}</p>
              <div className="kpi-value medicine-stat-value">
                <span>{card.value}</span>
                <span className="kpi-unit medicine-stat-unit">{card.unit}</span>
              </div>
            </div>
            <p className="kpi-note medicine-stat-note">{card.description}</p>
          </article>
        ))}
      </section>

      <section className="content-grid medicine-overview-grid" aria-label={overviewAriaLabel}>
        {overviewCards.map((card) => (
          <article key={card.title} className="medicine-overview-card">
            <div className="medicine-overview-card-content">
              <h2 className="medicine-overview-card-title">{card.title}</h2>
              <div className="medicine-overview-card-text">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {sections.map((section) => (
        <section
          key={section.title}
          ref={isCompetitorSection(section.title) ? competitorsRef : null}
          className={`panel section-panel medicine-panel ${
            section.title === '2. Market Size'
              ? 'medicine-market-panel'
              : section.title === '3. Target Audience'
                ? 'medicine-audience-panel'
                : section.title === '4. Problem Definition'
                  ? 'medicine-problem-panel'
                  : section.title === '5. Value Proposition'
                    ? 'medicine-value-panel'
                    : section.title === '7. Strategic Differentiation'
                      ? 'medicine-strategic-panel'
                      : section.title === '8. Channel Strategy'
                        ? 'medicine-channel-panel'
                        : section.title === '9. Monetization'
                          ? 'medicine-monetization-panel'
                          : section.title === '10. Strategic Summary'
                            ? 'medicine-summary-panel'
                            : section.title === '11. Entry Segment and Product'
                              ? 'medicine-entry-panel'
                              : section.title === '12. Product'
                                ? 'medicine-product-panel'
                : ''
          } ${isCompetitorSection(section.title) ? 'section-anchor-target' : ''}`.trim()}
        >
          <div className="medicine-heading">
            <h2
              className={`section-title-text ${
                section.title === '2. Market Size' ||
                section.title === '3. Target Audience' ||
                section.title === '4. Problem Definition' ||
                section.title === '5. Value Proposition' ||
                section.title === '7. Strategic Differentiation' ||
                section.title === '8. Channel Strategy' ||
                section.title === '9. Monetization' ||
                section.title === '10. Strategic Summary'
                  ? 'medicine-market-title'
                  : section.title === '11. Entry Segment and Product'
                    ? 'medicine-entry-title'
                    : section.title === '12. Product'
                      ? 'medicine-product-title'
                  : ''
              }`.trim()}
            >
              {section.eyebrow ?? section.title}
            </h2>
            {section.subtitle ? <p className="note">{section.subtitle}</p> : null}
          </div>

          {section.audienceTitle ? <h3 className="medicine-audience-subtitle">{section.audienceTitle}</h3> : null}

          {section.jtbdTitle ? <h3 className="medicine-audience-subtitle">{section.jtbdTitle}</h3> : null}

          {section.jtbdTable ? <DataTable table={section.jtbdTable} /> : null}

          {section.problemCardsTop ? (
            <div className="medicine-problem-card-stack">
              {section.problemCardsTop.map(([title, value]) => (
                <article key={title} className="summary-card medicine-problem-card">
                  <p className="medicine-problem-card-title">{title}</p>
                  <p className="body-text medicine-problem-card-text">{value}</p>
                </article>
              ))}
            </div>
          ) : null}

          {section.painsTitle ? <div className="medicine-divider" /> : null}

          {section.painsTitle ? <h3 className="medicine-audience-subtitle">{section.painsTitle}</h3> : null}

          {section.painsTable ? <DataTable table={section.painsTable} /> : null}

          {section.problemCardsBottom ? (
            <div className="medicine-problem-card-stack">
              {section.problemCardsBottom.map(([title, value]) => (
                <article key={title} className="summary-card medicine-problem-card">
                  <p className="medicine-problem-card-title">{title}</p>
                  <p className="body-text medicine-problem-card-text">{value}</p>
                </article>
              ))}
            </div>
          ) : null}

          {section.valueRelevance ? (
            <article className="summary-card medicine-value-card">
              <p className="medicine-problem-card-title">{section.valueRelevance.title}</p>
              <p className="body-text medicine-problem-card-text">{section.valueRelevance.text}</p>
            </article>
          ) : null}

          {section.strategicCard ? (
            <article className="summary-card medicine-strategic-card">
              <p className="medicine-problem-card-title">{section.strategicCard.title}</p>
              <ul className="note-list medicine-strategic-list">
                {section.strategicCard.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ) : null}

          {section.paragraphs?.length ? (
            <div className="section-body">
              {section.paragraphs.map((paragraph) => (
                <article key={paragraph} className="summary-card">
                  <p className="body-text">{paragraph}</p>
                </article>
              ))}
            </div>
          ) : null}

          {section.table && shouldRenderTableFirst(section.title) ? <DataTable table={section.table} /> : null}

          {section.secondaryTable && shouldRenderSecondaryTable(section.title) ? (
            <DataTable table={section.secondaryTable} />
          ) : null}

          {section.cards?.length ? (
            <div className="content-grid medicine-cards-grid">
              {section.cards.map(([title, value]) => (
                <article key={title} className="summary-card">
                  <p className="insight-title">{title}</p>
                  <p className="body-text">{value}</p>
                </article>
              ))}
            </div>
          ) : null}

          {section.table && !shouldRenderTableFirst(section.title) ? <DataTable table={section.table} /> : null}

          {section.arppuCard ? (
            <article className="summary-card medicine-arppu-card">
              <p className="medicine-problem-card-title">{section.arppuCard.title}</p>
              <p className="body-text medicine-problem-card-text">{section.arppuCard.text}</p>
            </article>
          ) : null}

          {section.productHypothesesTitle ? (
            <h3 className="medicine-audience-subtitle">{section.productHypothesesTitle}</h3>
          ) : null}

          {section.productHypothesesTable ? <DataTable table={section.productHypothesesTable} /> : null}

          {section.solutionFit ? (
            <article className="summary-card medicine-summary-card">
              <p className="medicine-problem-card-title">{section.solutionFit.title}</p>
              <p className="body-text medicine-summary-card-text">{section.solutionFit.text}</p>
            </article>
          ) : null}

          {section.marketEntryTitle ? <div className="medicine-divider" /> : null}

          {section.marketEntryTitle ? <h3 className="medicine-audience-subtitle">{section.marketEntryTitle}</h3> : null}

          {section.marketEntryTable ? <DataTable table={section.marketEntryTable} /> : null}

          {section.marketPotential ? (
            <article className="summary-card medicine-summary-card">
              <p className="medicine-problem-card-title">{section.marketPotential.title}</p>
              <p className="body-text medicine-summary-card-text">{section.marketPotential.text}</p>
            </article>
          ) : null}

          {section.audienceDetails ? (
            <>
              <div className="medicine-divider" />
              <div className="medicine-audience-detail-grid">
                {section.audienceDetails.map(([title, value]) => (
                  <article key={title} className="summary-card medicine-audience-detail-card">
                    <p className="insight-title medicine-audience-detail-label">{title}</p>
                    <p className="body-text medicine-audience-detail-text">{value}</p>
                  </article>
                ))}
              </div>
            </>
          ) : null}

          {section.logic ? (
            <article className="summary-card medicine-logic-card">
              <p className="insight-title medicine-logic-label">Логика</p>
              <p className="body-text medicine-logic-text">{section.logic}</p>
            </article>
          ) : null}

          {section.lists?.length ? (
            <div className={shouldRenderListsFullWidth(section.title) ? 'section-body' : 'content-grid medicine-cards-grid'}>
              {section.lists.map((list) => (
                <ListCard key={list.title} title={list.title} items={list.items} />
              ))}
            </div>
          ) : null}
        </section>
      ))}
    </>
  )
}


export default IndustryTab
