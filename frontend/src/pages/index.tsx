import Layout from "../components/Layout";

export default function Home() {

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-300 to-gray-300
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <h1>Seja bem-vindo!</h1>
        <h2>Escolha uma opção no menu</h2>
      </Layout>
    </div>
  )
}