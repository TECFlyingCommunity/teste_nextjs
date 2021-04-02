import Head from "next/head";
// import styles from "../styles/Home.module.css";
import styles from "../styles/style.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App: test</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             class={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p id={styles.text}>texto</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className={styles.main - content}>
      <div id={styles.form - content}>
        <form id={styles.form}>
          <div class={styles.img - logo}></div>

          <label for="name">
            <h4>Nome</h4>
          </label>
          <input type="text" id={styles.nome}></input>

          <label for="email">
            <h4>Email</h4>
          </label>
          <input type="text" id={styles.email}></input>

          <label for="telefone">
            <h4>Telefone</h4>
          </label>
          <input type="text" id={styles.telefone}></input>

          <label for="Mensagem">
            <h4>Mensagem</h4>
          </label>
          <input type="text" id={styles.mensagem}></input>

          <input type="submit" value="Enviar" id={styles.dados}></input>
        </form>
      </div>

      <div class="content">
        <span id={styles.content - style}>
          <p>
            <h3>ENDEREÇO</h3>
            Av. Alvaro Maia, 510 - Centro, Manaus - AM, 69025-049.
          </p>
          <br />
          <p>
            <h3>TELEFONE</h3>
            <h5>Centro Médico</h5>
            Telefone (92) 2121-9090
          </p>

          <p>
            <h5>Internação</h5>
            Telefone (92) 2121-9000
          </p>

          <p>
            <h5>Pronto Atendimento 24 Horas</h5>
            Telefone (92) 2121-9000
          </p>

          <p>
            <h5>Hemodiálise</h5>
            Telefone (92) 2121-9000
          </p>

          <br />
        </span>
      </div>
    </div>
  );
}
