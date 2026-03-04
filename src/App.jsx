import './App.css'

function App() {
  const kpis = [
    { label: 'TAM 2025', value: '217-316.5', unit: 'млрд ₽', note: 'клубный vs широкий контур' },
    { label: 'Онлайн-покупки', value: '+60%', note: 'ключевой драйвер роста платежей' },
    { label: 'Рекуррент', value: '7% -> 15%', note: 'подписочная трансформация рынка' },
    { label: 'Приоритет', value: 'Студии', note: '71% новых открытий в 2025' },
  ]

  const segments = [
    { segment: 'Подписочные сети', feature: 'Автосписания, ежемесячная модель' },
    { segment: 'Студии', feature: '71% новых открытий, быстрый onboarding' },
    { segment: 'Классические клубы', feature: 'Длинные карты и сезонные продукты' },
    { segment: 'Агрегаторы', feature: 'Платформа + расчеты, второй этап' },
  ]

  const segmentInsights = [
    { title: 'Приоритетный сегмент', value: 'Студии' },
    { title: 'Причины', value: 'Массовость, быстрая цифровизация и чувствительность к комиссии' },
    { title: 'Ключевая боль', value: 'Ручная сверка и нестабильность автосписаний' },
    { title: 'JTBD', value: 'Быстро принять оплату, снизить комиссию, отправить чек, передать данные в CRM.' },
  ]

  const focusCards = [
    { title: 'Куда идем', value: 'Студии, подписка + СБП, вертикальный платежный стек' },
    { title: 'Куда не идем', value: 'enterprise-сети, корпоративный фитнес, только эквайринг' },
    {
      title: 'Продуктовые гипотезы',
      value: 'Подписочный биллинг, СБП-first, BNPL для длинных карт, готовые интеграции',
    },
    { title: 'TAM 2025 для оценки', value: '217-316.5 млрд ₽ как диапазон методологий' },
  ]

  return (
    <main className="page">
      <section className="hero">
        <h1>Рынок фитнеса РФ (2023-2025) для A3</h1>
        <p className="subtitle">
          Рынок двузначно растет, переходит в онлайн и подписку. Первый приоритет для A3: студийный сегмент с
          вертикальным платежным стеком (рекуррент + СБП + онлайн + фискализация).
        </p>
      </section>

      <section className="kpi-grid" aria-label="KPI диапазон">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="kpi-card">
            <p className="kpi-label">{kpi.label}</p>
            <p className="kpi-value">
              <span>{kpi.value}</span>
              {kpi.unit ? <span className="kpi-unit">{kpi.unit}</span> : null}
            </p>
            <p className="kpi-note">{kpi.note}</p>
          </article>
        ))}
      </section>

      <section className="section-title">
        <h2>Opportunity Discovery</h2>
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="panel-block">
            <h3>Сигнал рынка: денежный рост (две методологии)</h3>
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
                  <tr>
                    <td>Клубный контур (выручка), млрд руб.</td>
                    <td>172</td>
                    <td>187.3</td>
                    <td>217.25</td>
                  </tr>
                  <tr>
                    <td>Широкий контур (оборот), млрд руб.</td>
                    <td>~214*</td>
                    <td>263</td>
                    <td>316.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="note">*214 рассчитано как проверка: 263 / 1.23.</p>
          </div>

          <div className="panel-block">
            <h3>Сегментация рынка и приоритет</h3>
            <div className="table-wrap">
              <table className="data-table table-segment table-compact">
                <colgroup>
                  <col className="col-two-left" />
                  <col className="col-two-right" />
                </colgroup>
                <thead>
                  <tr>
                    <th>Методология</th>
                    <th>Особенности</th>
                  </tr>
                </thead>
                <tbody>
                  {segments.map((row) => (
                    <tr key={row.segment}>
                      <td>{row.segment}</td>
                      <td>{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel-block">
            <h3>Цифровой сдвиг и подписка</h3>
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
                  <tr>
                    <td>Онлайн-покупки</td>
                    <td>Автосписания, ежемесячная модель</td>
                  </tr>
                  <tr>
                    <td>Онлайн-оборот</td>
                    <td>71% новых открытий, быстрый onboarding</td>
                  </tr>
                  <tr>
                    <td>Средний чек онлайн</td>
                    <td>Длинные карты и сезонные продукты</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <article className="panel panel-side">
          <h3>Вывод по сегменту</h3>
          <ul className="insight-list">
            {segmentInsights.map((item) => (
              <li key={item.title}>
                <p className="insight-title">{item.title}</p>
                <p className="insight-value">{item.value}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-title">
        <h2>Focus Opportunity Discovery</h2>
      </section>

      <section className="focus-grid">
        {focusCards.map((item) => (
          <article key={item.title} className="focus-card">
            <p className="focus-title">{item.title}</p>
            <p className="focus-value">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="section-title">
        <h2>Симуляция кейсов и приоритет входа</h2>
      </section>

      <section className="panel table-panel">
        <div className="panel-block">
          <div className="table-wrap">
            <table className="data-table data-table-wide table-scenarios">
              <colgroup>
                <col className="col-scenario-1" />
                <col className="col-scenario-2" />
                <col className="col-scenario-3" />
              </colgroup>
              <thead>
                <tr>
                  <th>Сценарий</th>
                  <th>Гипотеза</th>
                  <th>Доход A3/Вывод</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Студии</td>
                  <td>Оборот 20 млн, 80% безнал, комиссия A3 0.9%. Масштаб: ~1 040 студий (10% от 10 429).</td>
                  <td>~144 тыс. руб./год на студию; суммарно ~150 млн руб./год. Высокая повторяемость.</td>
                </tr>
                <tr>
                  <td>Подписочная сеть</td>
                  <td>50 клубов по 120 млн, оборот сети 6 млрд, комиссия 0.8%.</td>
                  <td>~48 млн руб./год. Высокий чек, но сложный вход.</td>
                </tr>
                <tr>
                  <td>Агрегатор</td>
                  <td>GMV 3 млрд, комиссия 0.7%.</td>
                  <td>~21 млн руб./год. Потенциал второго этапа.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel-block">
          <h3>Сравнение кейсов</h3>
          <div className="table-wrap">
            <table className="data-table data-table-wide table-compare table-compact">
              <colgroup>
                <col className="col-compare-1" />
                <col className="col-compare-2" />
                <col className="col-compare-3" />
                <col className="col-compare-4" />
              </colgroup>
              <thead>
                <tr>
                  <th>Параметр</th>
                  <th>Студии</th>
                  <th>Сети</th>
                  <th>Агрегатор</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Масштабируемость</td>
                  <td>Высокая</td>
                  <td>Средняя</td>
                  <td>Низкая</td>
                </tr>
                <tr>
                  <td>Повторяемость</td>
                  <td>Высокая</td>
                  <td>Низкая</td>
                  <td>Средняя</td>
                </tr>
                <tr>
                  <td>Скорость входа</td>
                  <td>Быстрая</td>
                  <td>Медленная</td>
                  <td>Средняя</td>
                </tr>
                <tr>
                  <td>Потенциал дохода</td>
                  <td>~150 млн</td>
                  <td>50-100 млн</td>
                  <td>20-40 млн</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <footer className="footer note">
          Стратегический вывод: первый приоритет для A3 - студийный сегмент с вертикальным платежным стеком, который
          дает массовый охват, повторяемую интеграцию и снижает риск зависимости от одного клиента.
        </footer>
      </section>
    </main>
  )
}

export default App
