let questions = [
    {
      id: 1,
      question: "O que significa UX?",
      answer: "User Experience",
      options: [
        "User Expression",
        "User Experience",
        "Unit Experimental",
        "User X",
      ],
    },
    {
      id: 2,
      question: "O que é Usabilidade?",
      answer: "Usabilidade tem a ver com a facilidade de uso de um usuário com o seu produto ",
      options: [
        "Usabilidade tem a ver com quantas pessoas podem usar seu produto ao mesmo tempo",
        "Usabilidade tem a ver com a aparência do seu produto",
        "Usabilidade tem a ver com a facilidade de uso de um usuário com o seu produto",
        "Usabilidade tem a ver com a facilidade de uso de um usuário com o seu design criado",
      ],
    },
    {
      id: 3,
      question: "Qual é a diferença entre UX (User Experience) e UI (User Interface)?",
      answer: "UX é focado na otimização de um produto para uso eficaz e agradável. UI Design se preocupa com a aparência e aspecto visual, a apresentação e interatividade de um produto ",
      options: [
        "Não há diferença. UX e UI expressam a mesma coisa de formas diferentes",
        "UX Design se preocupa com o usuário e UI não",
        "UX Design tem a ver com gráficos e aspectos visuais, com um foco na apresentação de interfaces, enquanto UI Design está principalmente preocupado em otimizar a experiência do usuário",
        "UX é focado na otimização de um produto para uso eficaz e agradável. UI Design se preocupa com a aparência e aspecto visual, a apresentação e interatividade de um produto",
      ],
    },
    {
      id: 4,
      question: "Com quantos testadores (testers; pessoas que testam o produto) você precisa para resolver 85% dos problemas?",
      answer: "100",
      options: ["5", "100", "1000", "Não há uma quantidade especifica para isso"],
    },
    {
      id: 5,
      question: "O que Design significa?",
      answer: "Todas as respostas acima",
      options: [
        "Como um produto é visualmente",
        "Cores e padrões, formatos e linhas",
        "Como um produto é usado / suas funções",
        "Todas as respostas acima",
      ],
    },
    {
      id: 6,
      question: "Um UX Designer provavelmente diria:",
      answer: "Vamos testar o produto!",
      options: [
        "Vamos já começar a implementação!",
        "Melhor ter a opinião de uma pessoa, do que muitas.", 
        "Pesquisa de usuário não ajuda em nada.", 
        "Vamos testar o produto!"],
    },
    {
      id: 7,
      question: "Quando um processo de UX Design é implementado?",
      answer: "Antes, durante e depois de um projeto, e então repetidamente quantas vezes forem necessárias",
      options: [
        "Somente no início de um projeto, quando ainda está na fase de planejamento",
        "Quando os gráficos e elementos visuais são necessários",
        "Antes, durante e depois de um projeto, e então repetidamente quantas vezes forem necessárias",
        "Quando wireframes são necessários",
      ],
    },
    {
      id: 8,
      question: "O que é um User Flow (Fluxo do Usuário)?",
      answer: "A jornada do usuário por um site (ou app, ou produto), quando está tentando completar uma tarefa",
      options: [
        "Um fluxo constante dos clientes que estão percorrendo um site", 
        "A jornada do usuário por um site (ou app, ou produto), quando está tentando completar uma tarefa", 
        "A quantidade de vezes que o usuário gasta usando um produto", 
        "Os movimentos físicos que um usuário faz para navegar em um site (ex: clicar com o mouse, digitar no teclado)"],
    },
    {
      id: 9,
      question: "Defina Wireframe:",
      answer: "Pode ser definido como um esqueleto, um protótipo ou uma versão bastante primitiva do visual de um projeto.",
      options: [
        "Pode ser definido como um esqueleto, um protótipo ou uma versão bastante primitiva do visual de um projeto.",
        "Não pode ser definido",
        "Como um produto é visualmente", 
        "Grafico gerado por ferramentas graficas"],
    },
    {
      id: 10,
      question: "Qual desses não é relacionado a UX/UI:",
      answer: "EAP",
      options: [
        "Wireframe",
        "EAP",
        "Usabilidade",
        "Cores",
      ],
    },
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function () {
    show(question_count);
  };
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i=0; i < option.length; i++) {
      option[i].onclick = function () {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active"))
           {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  
  function next() {
    
    if (question_count == questions.length - 1) {
      location.href = "points.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
  
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }