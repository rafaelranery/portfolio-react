import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph type="primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum quos
      nihil ad molestias quo distinctio ut, labore corporis sint, esse, aliquam
      perspiciatis. Maxime incidunt, ducimus earum molestias aliquam nisi?
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=rafaelranery&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rafaelranery&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
