import './App.css'

function App() {
  const kpis = [
    { label: 'TAM (2025)', value: '217-316.5 млрд руб.', note: 'клубный vs широкий контур' },
    { label: 'CAGR 2022-2025', value: '~12% / ~20.5%', note: 'клубный / широкий' },
    { label: 'Инфраструктура (2025)', value: '10 429 / >14.6 тыс.', note: 'объекты по разным методологиям' },
    { label: 'Подписка (2025)', value: '~15%', note: '~47.5 млрд руб. при широкой оценке' },
  ]

  const findings = [
    'Рынок растет, но итоговый размер зависит от методологии: 316.5 против 217.25 млрд руб.',
    'Высокая фрагментация: основной оборот в длинном хвосте локальных игроков.',
    'Студии дают основной прирост по открытиям и быстро растут в денежном выражении.',
    'Онлайн и рекуррент ускоряются: +60% по онлайн-покупкам, +75% по онлайн-обороту.',
    'Низкая маржа операторов усиливает спрос на СБП-first и снижение платежной комиссии.',
  ]

  const recommendations = [
    'Собрать вертикальный fitness payments stack: рекуррент, retry/dunning, корректные отмены и фискализация.',
    'Сделать СБП-first пакет: QR/ссылка, мгновенные уведомления, привязка к посещению/заказу.',
    'Упаковать быстрый онбординг для студий и малых форматов с минимальными интеграциями.',
    'Сегментировать GTM: подписочные сети, студии, классические клубы и отдельные сценарии продаж.',
  ]

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">One-pager report</p>
        <h1>Обзор рынка фитнес-центров в России и выводы для A3</h1>
        <p className="subtitle">
          Период данных: 2022-2025. Все суммы указаны в млрд руб. Значок "≈" означает расчетную оценку.
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
          <h2>Ключевые выводы</h2>
          <ul>
            {findings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <h2>Визуалы и смысл</h2>
          <div className="mini-chart">
            <h3>Визуал A: Денежный объем рынка</h3>
            <p>2022-2025: широкий контур растет быстрее клубного, поэтому TAM планируется диапазоном.</p>
          </div>
          <div className="mini-chart">
            <h3>Визуал B: Онлайн и рекуррент</h3>
            <p>Онлайн-операции и подписочные списания растут, усиливая спрос на рекуррентный стек.</p>
          </div>
        </article>
      </section>

      <section className="panel recommendations">
        <h2>Рекомендации для A3</h2>
        <ul>
          {recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel table-panel">
        <h2>Сравнение результатов исследований</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Метрика</th>
                <th>Результат A</th>
                <th>Результат B</th>
                <th>Итог</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Подход к размеру рынка</td>
                <td>Две методологии: широкий и клубный контур</td>
                <td>Поддержка диапазона TAM</td>
                <td>Консенсус по диапазонной оценке</td>
              </tr>
              <tr>
                <td>Объем 2025</td>
                <td>316.5 vs 217.25</td>
                <td>Те же опорные значения</td>
                <td>Различается только интерпретация</td>
              </tr>
              <tr>
                <td>Платежные тренды</td>
                <td>Рост доли рекуррента</td>
                <td>Фискальная динамика онлайн</td>
                <td>Subscription + online как приоритет</td>
              </tr>
              <tr>
                <td>Структура рынка</td>
                <td>Фрагментация и длинный хвост</td>
                <td>Требования к быстрому онбордингу</td>
                <td>Нужен двойной GTM: сети + SMB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="footer">
        Источники: исследование A (объем, динамика, TAM/SAM/SOM) и исследование B (продуктовые рынки платежного сервиса).
      </footer>
    </main>
  )
}

export default App
