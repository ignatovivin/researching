import './App.css'

function App() {
  const kpis = [
    { label: 'TAM 2025', value: '217-316.5 млрд руб.', note: 'клубная выручка vs широкий оборот' },
    { label: 'Онлайн-покупки', value: '+60%', note: 'ключевой драйвер роста платежей' },
    { label: 'Рекуррент', value: '7% -> 15%', note: 'рост доли за 2023-2025' },
    { label: 'Маржинальность', value: '~7%', note: 'высокая чувствительность к комиссии' },
  ]

  const paymentDynamics = [
    { metric: 'Средний чек', value: '3653 руб., +10%' },
    { metric: 'Число покупок', value: '+8%' },
    { metric: 'Онлайн-покупки', value: '+60%' },
    { metric: 'Онлайн-оборот', value: '+75%' },
    { metric: 'Средний чек онлайн', value: '5611 руб., +15%' },
  ]

  const bars = [
    { label: 'Число покупок', value: 8 },
    { label: 'Онлайн-покупки', value: 60 },
    { label: 'Онлайн-оборот', value: 75 },
    { label: 'Средний чек', value: 10 },
    { label: 'Средний чек онлайн', value: 15 },
  ]

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">One-pager report</p>
        <h1>Рынок фитнес-центров в России (2023-2025): Pipeline-анализ для A3</h1>
        <p className="subtitle">
          Рынок растет, становится подписочным и быстрее уходит в онлайн. Для A3 вход оправдан как вертикальный
          платежный продукт с упором на рекуррент, СБП-first и быструю интеграцию.
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

      <section className="content-grid">
        <article className="panel">
          <h2>DISCOVER: размер, структура и динамика</h2>
          <h3>Денежный объем рынка (две методологии)</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Показатель</th>
                  <th>2023</th>
                  <th>2024</th>
                  <th>2025</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Выручка отрасли (ассоциация)</td>
                  <td>172</td>
                  <td>187.3</td>
                  <td>217.25</td>
                </tr>
                <tr>
                  <td>Оборот рынка (исслед. оценка)</td>
                  <td>~214*</td>
                  <td>263</td>
                  <td>316.5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="kpi-note">*214 рассчитано как проверка: 263 / 1.23.</p>

          <h3>Инфраструктура рынка</h3>
          <ul>
            <li>10 429 объектов в клубном учете (2025).</li>
            <li>71% новых открытий в 2025 году приходятся на студии.</li>
            <li>Студийные форматы растут быстрее классических клубов.</li>
            <li>Это приводит поток МСБ-мерчантов с высокой чувствительностью к комиссии.</li>
          </ul>
        </article>

        <article className="panel">
          <h2>Платежная динамика</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Показатель</th>
                  <th>Значение</th>
                </tr>
              </thead>
              <tbody>
                {paymentDynamics.map((row) => (
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
            {bars.map((bar) => (
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
            <p>Онлайн-канал становится главным драйвером роста платежей в фитнесе.</p>
          </div>
        </article>
      </section>

      <section className="panel recommendations">
        <h2>DEFINE: TAM / SAM / SOM и продуктовые гипотезы</h2>
        <ul>
          <li>TAM: 217-316.5 млрд руб. в 2025 году (диапазон методологий).</li>
          <li>SAM: онлайн-оплаты + подписка + клубы/студии крупных городов (оценочно 40-60% оборота).</li>
          <li>SOM старт: студийные форматы, подписочные сети, клубы с активным онлайном.</li>
          <li>Гипотезы продукта: подписочный биллинг, СБП-first, BNPL для длинных карт, интеграции с отраслевым ПО.</li>
        </ul>
      </section>

      <section className="panel table-panel">
        <h2>DEVELOP / DELIVER: пилот и масштабирование</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Блок</th>
                <th>Что проверяем / делаем</th>
                <th>Критерий</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DEVELOP</td>
                <td>Автосписания, retry, доля СБП, скорость подключения, число кастомных доработок.</td>
                <td>Go: повторяемое внедрение без кастомной разработки.</td>
              </tr>
              <tr>
                <td>DEVELOP</td>
                <td>Стабильность интеграции на разных типах клиентов.</td>
                <td>Kill: индивидуальная интеграция для каждого клиента.</td>
              </tr>
              <tr>
                <td>DELIVER</td>
                <td>GTM для студий: быстрый онбординг и короткий time-to-first-payment.</td>
                <td>Масштабирование через стандартизированный пакет.</td>
              </tr>
              <tr>
                <td>DELIVER</td>
                <td>GTM для сетей и классических клубов: subscription stack + BNPL.</td>
                <td>Рост доли recurring и доли онлайн-оборота в портфеле A3.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="footer">
        Итог: рынок растущий, подписочный, цифровизирующийся и чувствительный к комиссии. Вход для A3 оправдан как
        вертикальный платежный продукт.
      </footer>
    </main>
  )
}

export default App
