/* Recurso de construção de temas do style component */
const temaDark = {
  corPrincipal: '#fff',
  corSecundaria: '#eee',
  corDeFundo: '#282a35',
  corDeFundoBotao: '#fff',
  corDaBorda: '#c1c1c1'
}

export default temaDark

/* É precisor criar uma tipagem para este tema,
visto que contém propriedades que não são intrínsecas do
themeDefault */
export type Theme = {
  corPrincipal: string
  corSecundaria: string
  corDeFundo: string
  corDeFundoBotao: string
  corDaBorda: string
}
