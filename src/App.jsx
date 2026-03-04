import './App.css'

function App() {
  const kpis = [
    { label: 'TAM 2025', value: '217-316.5', unit: 'млрд ₽', note: 'клубный vs широкий контур' },
    { label: 'Онлайн-покупки', value: '+60%', note: 'ключевой драйвер роста платежей' },
    { label: 'Рекуррент', value: '7% → 15%', note: 'подписочная трансформация рынка' },
    { label: 'Приоритет', value: 'Рекуррент', note: 'Первичный рынок для A3' },
  ]

  const marketRows = [
    { method: 'Выручка отрасли (НФС), млрд руб', y2023: '172', y2024: '187.3', y2025: '217.25' },
    { method: 'Широкий контур (оборот), млрд руб.', y2023: '~214*', y2024: '263', y2025: '316.5' },
    { method: 'Количество фитнес-объектов', y2023: '9050', y2024: '~9750', y2025: '10429' },
  ]

  const digitalRows = [
    { metric: 'Онлайн-покупки', value: 'Автосписания, ежемесячная модель' },
    { metric: 'Онлайн-оборот', value: '71% новых открытий, быстрый onboarding' },
    { metric: 'Средний чек онлайн', value: 'Длинные карты и сезонные продукты' },
  ]

  const subscriptionRows = [
    { metric: 'Доля сетей с рекуррентной оплатой в РФ (2024)', value: '~10%' },
    { metric: 'Доля в Москве', value: '~20%' },
    { metric: 'Доля рекуррентной модели в 2018', value: '~1%' },
    { metric: 'Доля рекуррентной модели в 2023', value: '~7%' },
  ]

  const onlineRows = [
    { metric: 'Средний чек фитнес-центров', value: '+10%' },
    { metric: 'Количество покупок', value: '+8%' },
    { metric: 'Оборот', value: '+18%' },
    { metric: 'Онлайн-покупки', value: '+60%' },
    { metric: 'Онлайн-оборот', value: '+75%' },
  ]

  const segmentRows = [
    { segment: 'Классические клубы', feature: 'годовые карты', relevance: 'средняя' },
    { segment: 'Рекуррентные сети', feature: 'ежемесячная подписка', relevance: 'высокая' },
    { segment: 'Студии', feature: 'пакетные оплаты', relevance: 'средняя' },
    { segment: 'Корпоративный фитнес', feature: 'B2B-контракты', relevance: 'ограниченная' },
    { segment: 'Премиум/Wellness', feature: 'персонализированный сервис', relevance: 'низкая' },
  ]

  const jtbdRows = [
    {
      title: '1. Фитнес-клуб должен регулярно получать оплату подписки без ручных действий',
      hypothesis: 'Инфраструктура регулярных платежей A3 может обеспечить стабильную обработку подписочных платежей фитнес-клубов',
      reason: ['стабильно получать ежемесячные платежи', 'снижать отказы списаний', 'уменьшать отток клиентов'],
      solution: 'Решение A3 может заключаться в создании банковской подписки на фитнес, аналогичной оплате коммунальных услуг',
    },
    {
      title: '2. Фитнес-сети хотят снизить стоимость приема платежей',
      hypothesis: 'Использование СБП через инфраструктуру A3 может снизить стоимость платежей для фитнес-клубов',
      reason: ['в условиях низкой маржинальности клубы заинтересованы в снижении комиссии'],
      solution: 'СБП предоставляет возможность оплаты с комиссией до 0.7%, что ниже традиционного эквайринга',
    },
    {
      title: '3. Фитнес-сетям нужно автоматически учитывать и сверять платежи',
      hypothesis: 'Инфраструктура реестров A3 может автоматизировать сверку платежей фитнес-сетей',
      reason: ['единые реестры платежей', 'автоматическая сверка', 'снижение ручных операций'],
      solution: '',
    },
    {
      title: '4. Фитнес-клуб должен управлять жизненным циклом подписки',
      hypothesis: 'Жизненный цикл фитнес-подписки можно реализовать в архитектуре A3',
      reason: 'заморозка, изменение тарифа, пакетные услуги',
      solution: '',
    },
    {
      title: '5. Пользователь должен иметь простой способ управлять подпиской',
      hypothesis: 'Подписка на фитнес может быть реализована через банковские приложения в модели B2B2C A3',
      reason: '',
      solution: '',
    },
  ]

  const alternativeRows = [
    { platform: 'CloudPayments', capabilities: 'рекуррентные платежи' },
    { platform: 'ЮKassa', capabilities: 'автоплатежи' },
    { platform: 'фитнес-CRM', capabilities: 'встроенные платежные инструменты' },
  ]

  const applicabilityRows = [
    { strong: 'B2B2C-модель', bottleneck: 'заморозки', required: 'стандартизация данных' },
    { strong: 'интеграции с банками', bottleneck: 'смена тарифов', required: 'адаптация CRM фитнес-клубов' },
    { strong: 'подписочные сценарии', bottleneck: 'пакетные услуги', required: 'возможная разработка subscription-engine' },
    { strong: 'оркестрация платежных процессов', bottleneck: 'гибридные модели', required: '-' },
  ]

  return (
    <main className="page">
      <section className="hero">
        <h1 className="hero-title">Рынок фитнеса РФ (2023-2025) для A3</h1>
        <p className="subtitle">
          Подход исследования построен по схеме Top-down:
          <br />
          сигнал → рынок → сегмент → боли/JTBD → применимость решения → экономика
        </p>
      </section>

      <section className="kpi-grid" aria-label="KPI диапазон">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="kpi-card">
            <div className="kpi-main">
              <p className="kpi-label">{kpi.label}</p>
              <p className="kpi-value">
                <span>{kpi.value}</span>
                {kpi.unit ? <span className="kpi-unit">{kpi.unit}</span> : null}
              </p>
            </div>
            <p className="kpi-note">{kpi.note}</p>
          </article>
        ))}
      </section>

      <section className="panel section-panel">
        <h2 className="section-title-text market-section-title">Рынок: масштаб и динамика фитнес-индустрии</h2>
        <div className="section-body">
          <div className="panel-block">
            <h3 className="block-title market-content-title">Основные показатели рынка</h3>
            <div className="table-wrap">
              <table className="data-table table-market table-compact">
                <colgroup>
                  <col className="col-market-main" />
                  <col className="col-market-year" />
                  <col className="col-market-year" />
                  <col className="col-market-year" />
                </colgroup>
                <thead>
                  <tr>
                    <th>Методология</th>
                    <th>2023</th>
                    <th>2024</th>
                    <th>2025</th>
                  </tr>
                </thead>
                <tbody>
                  {marketRows.map((row) => (
                    <tr key={row.method}>
                      <td>{row.method}</td>
                      <td>{row.y2023}</td>
                      <td>{row.y2024}</td>
                      <td>{row.y2025}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">*214 рассчитано как проверка: 263 / 1.23.</p>
          </div>

          <div className="panel-block">
            <h3 className="block-title market-content-title">Цифровой сдвиг и подписка</h3>
            <div className="table-wrap">
              <table className="data-table table-digital table-compact">
                <colgroup>
                  <col className="col-two-left" />
                  <col className="col-two-right" />
                </colgroup>
                <thead>
                  <tr>
                    <th>Показатель</th>
                    <th>Динамика</th>
                  </tr>
                </thead>
                <tbody>
                  {digitalRows.map((row) => (
                    <tr key={row.metric}>
                      <td>{row.metric}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="panel section-panel structural-panel">
        <div className="structural-heading">
          <h2 className="section-title-text structural-section-title">Структурные изменения рынка, влияющие на платежи</h2>
          <p className="note">В отрасли происходят структурные сдвиги, напрямую влияющие на платежные сценарии</p>
        </div>
        <div className="section-body">
          <div className="panel-block">
            <h3 className="block-title">Распространение подписочной модели</h3>
            <div className="table-wrap">
              <table className="data-table table-compact table-structural-subscription">
                <thead>
                  <tr>
                    <th>Показатель</th>
                    <th>Значение</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptionRows.map((row) => (
                    <tr key={row.metric}>
                      <td>{row.metric}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">Это означает постепенный переход от годовых абонементов к ежемесячным платежам</p>
          </div>

          <div className="panel-block">
            <div className="structural-subheading">
              <h3 className="block-title">Рост онлайн-платежей</h3>
              <p className="note">Данные ОФД показывают значительное ускорение онлайн-оплат</p>
            </div>
            <div className="table-wrap">
              <table className="data-table table-compact table-structural-online">
                <thead>
                  <tr>
                    <th>Метрика</th>
                    <th>Изменение 2024 к 2023</th>
                  </tr>
                </thead>
                <tbody>
                  {onlineRows.map((row) => (
                    <tr key={row.metric}>
                      <td>{row.metric}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="note note-multiline">
              <p>Онлайн-канал растёт значительно быстрее офлайн-платежей, что усиливает значимость:</p>
              <p>-платежных виджетов</p>
              <p>-рекуррентных платежей</p>
              <p>-оптимизации конверсии оплаты.</p>
            </div>
          </div>

          <div className="panel-block">
            <div className="structural-subheading">
              <h3 className="block-title">Давление издержек</h3>
              <p className="note">Средняя маржинальность фитнес-бизнеса оценивается примерно в 7%</p>
            </div>
            <div className="pressure-card">
              <div className="pressure-intro">
                <p className="note">Это делает отрасль чувствительной к:</p>
                <ul className="note-list">
                  <li>-комиссиям эквайринга</li>
                  <li>-стоимости обработки платежей</li>
                  <li>-ручным операционным процессам</li>
                </ul>
              </div>
              <p className="body-text">
                Поэтому любые решения, позволяющие снизить стоимость платежей или автоматизировать процессы,
                потенциально востребованы
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="panel section-panel segmentation-panel">
        <div className="segmentation-content">
          <div className="segmentation-heading">
            <h2 className="section-title-text segmentation-section-title">Сегментация рынка по бизнес-моделям</h2>
            <p className="note">Рынок разделён по модели монетизации</p>
          </div>
          <div className="table-wrap">
            <table className="data-table table-compact table-segmentation">
              <colgroup>
                <col className="col-seg-main" />
                <col className="col-seg-other" />
                <col className="col-seg-other" />
              </colgroup>
              <thead>
                <tr>
                  <th>Сегмент</th>
                  <th>Особенности</th>
                  <th>Релевантность для А3</th>
                </tr>
              </thead>
              <tbody>
                {segmentRows.map((row) => (
                  <tr key={row.segment}>
                    <td>{row.segment}</td>
                    <td>{row.feature}</td>
                    <td>{row.relevance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="segmentation-card">
            <div className="segmentation-group">
              <p className="insight-title">Приоритетный сегмент</p>
              <p className="body-text">Рекуррентные сети фитнес-клубов</p>
            </div>
            <div className="segmentation-group">
              <p className="insight-title">Причины</p>
              <ul className="note-list">
                <li>-регулярные платежи</li>
                <li>-высокая доля транзакций</li>
                <li>-рост популярности модели подписки</li>
                <li>-совпадение с компетенциями A3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="panel section-panel jtbd-section jtbd-panel">
        <h2 className="section-title-text jtbd-section-title">JTBD,Гипотезы и ключевые боли сегмента</h2>
        <div className="section-body jtbd-body">
          {jtbdRows.map((item) => {
            const reasons = Array.isArray(item.reason) ? item.reason : item.reason ? [item.reason] : []

            return (
              <article key={item.title} className="jtbd-card">
                <p className="jtbd-title">{item.title}</p>
                <div className="jtbd-pair">
                  <p className="insight-title">Гипотеза</p>
                  <p className="body-text">{item.hypothesis}</p>
                </div>
                {reasons.length ? (
                  <div className="jtbd-pair">
                    <p className="insight-title">Причины</p>
                    <ul className="note-list">
                      {reasons.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {item.title.startsWith('4.') ? (
                  <div className="jtbd-pair">
                    <p className="insight-title">Жизненный цикл</p>
                    <ul className="note-list">
                      <li>заморозка</li>
                      <li>изменение тарифа</li>
                      <li>пакетные услуги</li>
                    </ul>
                  </div>
                ) : null}
                {item.solution ? (
                  <div className="jtbd-pair">
                    <p className="insight-title">Решение</p>
                    <p className="body-text">{item.solution}</p>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </section>

      <section className="panel section-panel alternatives-panel">
        <div className="alternatives-content">
          <div className="alternatives-heading">
            <h2 className="section-title-text alternatives-section-title">Альтернативы на рынке</h2>
            <p className="note">Платежные сценарии уже реализуются рядом сервисов</p>
          </div>
          <div className="table-wrap">
            <table className="data-table table-compact">
              <thead>
                <tr>
                  <th>Платформа</th>
                  <th>Возможности</th>
                </tr>
              </thead>
              <tbody>
                {alternativeRows.map((row) => (
                  <tr key={row.platform}>
                    <td>{row.platform}</td>
                    <td>{row.capabilities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="panel section-panel applicability-panel">
        <div className="applicability-content">
          <h2 className="section-title-text applicability-section-title">Применимость решения A3</h2>
          <div className="table-wrap">
            <table className="data-table table-compact table-applicability">
              <colgroup>
                <col className="col-app-main" />
                <col className="col-app-mid" />
                <col className="col-app-last" />
              </colgroup>
              <thead>
                <tr>
                  <th>Сильные стороны A3</th>
                  <th>узкое горлышко</th>
                  <th>Для корректной работы потребуется</th>
                </tr>
              </thead>
              <tbody>
                {applicabilityRows.map((row) => (
                  <tr key={row.strong}>
                    <td>{row.strong}</td>
                    <td>{row.bottleneck}</td>
                    <td>{row.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="panel section-panel monetization-panel">
        <div className="monetization-content">
          <div className="monetization-heading">
            <h2 className="section-title-text monetization-section-title">Предварительная модель монетизации</h2>
            <p className="note">Рассмотрены два подхода</p>
          </div>
          <div className="monetization-card">
            <div className="monetization-block">
              <div className="monetization-pair">
                <p className="insight-title">Модель A — B2B2C через банки</p>
                <p className="body-text">A3 продает банкам сервис подписок на фитнес</p>
              </div>
              <div className="monetization-pair">
                <p className="insight-title">Доход формируется через</p>
                <ul className="note-list monetization-list">
                  <li>-лицензирование</li>
                  <li>-usage-fee</li>
                </ul>
              </div>
            </div>
            <div className="monetization-divider" />
            <div className="monetization-block">
              <div className="monetization-pair">
                <p className="insight-title">Модель B — B2C комиссия</p>
                <p className="body-text">Фитнес-клубы подключаются к каналам A3</p>
              </div>
              <div className="monetization-pair">
                <p className="insight-title">Доход формируется через</p>
                <p className="body-text">-комиссия с транзакций</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel section-panel discovery-panel">
        <div className="discovery-content">
          <h2 className="section-title-text discovery-section-title">Итоговое решение Opportunity Discovery</h2>
          <div className="content-grid discovery-grid">
            <article className="summary-card discovery-card-body">
              <div className="discovery-pair">
                <p className="insight-title">Куда идем</p>
                <p className="body-text">
                  Рекуррентные сети фитнес-клубов
                  <br />
                  в крупных городах (в первую очередь Москва)
                </p>
              </div>
              <div className="discovery-pair">
                <p className="insight-title">Причины:</p>
                <ul className="note-list">
                  <li>-рост подписочной модели</li>
                  <li>-увеличение онлайн-платежей</li>
                  <li>-совпадение с компетенциями A3.</li>
                </ul>
              </div>
            </article>
            <article className="summary-card discovery-card-body">
              <div className="discovery-pair">
                <p className="insight-title">Куда не идем</p>
                <p className="body-text">
                  корпоративный фитнес
                  <br />
                  одиночные студии как стартовый сегмент
                </p>
              </div>
              <div className="discovery-pair">
                <p className="insight-title">Причины</p>
                <ul className="note-list">
                  <li>-небольшой вклад в выручку отрасли</li>
                  <li>-высокая фрагментация</li>
                  <li>-дорогая дистрибуция</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
