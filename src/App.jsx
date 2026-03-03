import './App.css'

function App() {
  const kpis = [
    { label: 'TAM 2025', value: '217-316.5 млрд руб.', note: 'клубный vs широкий контур' },
    { label: 'Онлайн-покупки', value: '+60%', note: 'ключевой драйвер роста платежей' },
    { label: 'Рекуррент', value: '7% -> 15%', note: 'подписочная трансформация рынка' },
    { label: 'Приоритет', value: 'Студии', note: '71% новых открытий в 2025' },
  ]

  const digitalShift = [
    { metric: 'Онлайн-покупки', value: '+60%' },
    { metric: 'Онлайн-оборот', value: '+75%' },
    { metric: 'Средний чек онлайн', value: '5611 руб., +15%' },
  ]

  const growthBars = [
    { label: 'Онлайн-покупки', value: 60 },
    { label: 'Онлайн-оборот', value: 75 },
    { label: 'Средний чек онлайн', value: 15 },
  ]

  const segments = [
    { segment: 'Подписочные сети', feature: 'Автосписания, ежемесячная модель' },
    { segment: 'Студии', feature: '71% новых открытий, быстрый onboarding' },
    { segment: 'Классические клубы', feature: 'Длинные карты и сезонные продукты' },
    { segment: 'Агрегаторы', feature: 'Платформа + расчеты, второй этап' },
  ]

  return (
    <main className="page">
      <div className="section-group section-group-intro">
        <section className="hero">
          <p className="eyebrow">One-pager report</p>
          <h1>Opportunity Discovery + Simulation Cases: рынок фитнеса РФ (2023-2025) для A3</h1>
          <p className="subtitle">
            Рынок двузначно растет, переходит в онлайн и подписку. Первый приоритет для A3: студийный сегмент с
            вертикальным платежным стеком (рекуррент + СБП + онлайн + фискализация).
          </p>
        </section>

        <section className="kpi-grid" aria-label="KPI диапазон">
          {kpis.map((kpi) => (
            <article key={kpi.label} className="kpi-card">
              <p className="kpi-label">{kpi.label}</p>
              <p className="kpi-value">{kpi.value}</p>
              <p className="kpi-note">{kpi.note}</p>
            </article>
          ))}
        </section>
      </div>

      <div className="section-group section-group-discover">
        <section className="content-grid">
          <article className="panel">
            <h2>Часть I. Opportunity Discovery</h2>
            <h3>Сигнал рынка: денежный рост (две методологии)</h3>
            <div className="table-wrap">
              <table className="data-table">
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
            <p className="kpi-note">*214 рассчитано как проверка: 263 / 1.23.</p>

            <h3>Сегментация рынка и приоритет</h3>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Сегмент</th>
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
            <ul>
              <li>Приоритетный сегмент: студии.</li>
              <li>Причины: массовость, быстрая цифровизация, чувствительность к комиссии.</li>
              <li>Ключевая боль: ручная сверка и нестабильные автосписания.</li>
              <li>JTBD: быстро принять оплату, снизить комиссию, отправить чек, передать данные в CRM.</li>
            </ul>
          </article>

          <article className="panel">
            <h2>Цифровой сдвиг и подписка</h2>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Показатель</th>
                    <th>Динамика г/г</th>
                  </tr>
                </thead>
                <tbody>
                  {digitalShift.map((row) => (
                    <tr key={row.metric}>
                      <td>{row.metric}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mini-chart">
              <h3>Мини-график роста (г/г, %)</h3>
              {growthBars.map((bar) => (
                <div key={bar.label} className="bar-row">
                  <span>{bar.label}</span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${bar.value}%` }} />
                  </div>
                  <strong>+{bar.value}%</strong>
                </div>
              ))}
            </div>
            <div className="mini-chart">
              <h3>Ключевой вывод</h3>
              <p>Онлайн и подписка формируют основу продуктовой стратегии A3 для фитнес-сегмента.</p>
            </div>
          </article>
        </section>
      </div>

      <div className="section-group section-group-define">
        <section className="panel recommendations">
          <h2>Фокус Opportunity Discovery</h2>
          <ul>
            <li>Куда идем: студии, подписка + СБП, вертикальный платежный стек.</li>
            <li>Куда не идем на старте: enterprise-сети, корпоративный фитнес, только эквайринг.</li>
            <li>Продуктовые гипотезы: подписочный биллинг, СБП-first, BNPL для длинных карт, готовые интеграции.</li>
            <li>TAM 2025 для оценки стратегии: 217-316.5 млрд руб. как диапазон методологий.</li>
          </ul>
        </section>
      </div>

      <div className="section-group section-group-execution">
        <section className="panel table-panel">
          <h2>Часть II. Симуляция кейсов и приоритет входа</h2>
          <div className="table-wrap">
            <table className="data-table data-table-wide">
              <thead>
                <tr>
                  <th>Сценарий</th>
                  <th>Гипотеза</th>
                  <th>Доход A3 / вывод</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Студия</td>
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
          <div className="mini-chart">
            <h3>Сравнение кейсов</h3>
            <div className="table-wrap">
              <table className="data-table data-table-wide">
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
        </section>

        <footer className="footer">
          Стратегический вывод: первый приоритет для A3 - студийный сегмент с вертикальным платежным стеком, который
          дает массовый охват, повторяемую интеграцию и снижает риск зависимости от одного клиента.
        </footer>
      </div>
    </main>
  )
}

export default App
