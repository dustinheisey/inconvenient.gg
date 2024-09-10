import { html } from 'lit'
import './nds-reading-progress.js'

export default {
  title: 'Components/NdsReadingProgress',
  component: 'nds-reading-progress'
}

const Template = () => html`
  <nds-reading-progress></nds-reading-progress>
  <div style="height: 2000px; padding: 20px;">
    <h1>Scroll down to see the reading progress bar in action</h1>
    <p>This is a long page with a reading progress bar at the top.</p>
    <p>Keep scrolling to see the progress bar fill as you read.</p>
  </div>
`

export const Default = Template.bind({})
