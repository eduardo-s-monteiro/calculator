document.addEventListener("DOMContentLoaded", () => {
    // Perguntas com as opções de respostas e número da etapa
    const questions = [
        { question: "Compartilhe seus hábitos sustentáveis e práticas ambientais em casa e no cotidiano", type: "text", etapa: 1 },
        { question: "1. Com que frequência você recicla lixo?", answers: ["Sempre", "Com boa frequência", "Raramente", "nunca"], etapa: 1 },
        { question: "2. Você usa lâmpadas de LED em casa?", answers: ["Sim", "Não"], etapa: 1 },
        { question: "3. Evita usar plástico descartável?", answers: ["Sempre", "Às vezes", "Quase nunca", "Nunca"], etapa: 1 },
        { question: "4. Você aproveita restos de comida?", answers: ["Sempre", "Às vezes", "Nunca", "Às vezes sim, às vezes não"], etapa: 1 },
        { question: "5. Compra roupas usadas ou de brechó?", answers: ["Sim", "Não", "Às vezes", "Prefiro novas"], etapa: 1 },
        { question: "6. Prefere produtos locais?", answers: ["Sempre", "Às vezes", "Nunca", "Quando disponível"], etapa: 1 },
        { question: "7. Separa resíduos orgânicos de recicláveis?", answers: ["Sempre", "Às vezes", "Nunca", "Às vezes erro"], etapa: 1 },
        { question: "8. Utiliza sacolas reutilizáveis?", answers: ["Sim", "Não", "Às vezes", "Nunca me lembrei"], etapa: 1 },
        { question: "9. Diminui o consumo de carne?", answers: ["Sempre", "Às vezes", "Nunca", "Tento reduzir"], etapa: 1 },
        { question: "10. Você pratica compostagem?", answers: ["Sim", "Não", "Às vezes", "Quero aprender"], etapa: 1 },
        { question: "11. Prefere energia renovável?", answers: ["Sim", "Não", "Parcialmente", "Às vezes sim"], etapa: 1 },
        { question: "12. Deixa luzes apagadas quando sai?", answers: ["Sempre", "Às vezes", "Nunca", "Depende da situação"], etapa: 1 },
        { question: "13. Economiza água?", answers: ["Sempre", "Às vezes", "Nunca", "Quando lembro"], etapa: 1 },
        { question: "14. Utiliza transporte público?", answers: ["Sempre", "Às vezes", "Nunca", "Quando possível"], etapa: 1 },
        { question: "15. Planeja suas compras para evitar desperdício?", answers: ["Sim", "Não", "Às vezes", "Quando necessário"], etapa: 1 },

        // Etapa 2: Perguntas sobre Viagens e Sustentabilidade
        { question: "Na etapa 2, compartilhe seus hábitos relacionados às compras", answers: ["Nenhuma", "1-3", "Mais de 3", "Uma vez a cada dois anos"], etapa: 2 },
        { question: "16. Quantas vezes você viaja de avião por ano?", answers: ["Nenhuma", "1-3", "Mais de 3", "Uma vez a cada dois anos"], etapa: 2 },
        { question: "17. Você compartilha caronas?", answers: ["Sempre", "Às vezes", "Nunca", "Compartilho com amigos"], etapa: 2 },
        { question: "18. Prefere transporte público em viagens?", answers: ["Sempre", "Às vezes", "Nunca", "Quando possível"], etapa: 2 },
        { question: "19. Evita dirigir sozinho em longas viagens?", answers: ["Sempre", "Às vezes", "Nunca", "Depende do destino"], etapa: 2 },
        { question: "20. Ótica por hospedagens sustentáveis?", answers: ["Sim", "Não", "Às vezes", "Quando encontro opções boas"], etapa: 2 },
        { question: "21. Participa de turismo comunitário?", answers: ["Sim", "Não", "Às vezes", "Em viagens locais"], etapa: 2 },
        { question: "22. Utiliza bicicletas ou patinetes em viagens?", answers: ["Sempre", "Às vezes", "Nunca", "Quando é uma opção fácil"], etapa: 2 },
        { question: "23. Reduz viagens aéreas curtas?", answers: ["Sempre", "Às vezes", "Nunca", "Quando possível"], etapa: 2 },
        { question: "24. Compensa emissões de carbono de suas viagens?", answers: ["Sim", "Não", "Não sei", "Quero começar a fazer"], etapa: 2 },
        { question: "25. Viaja para locais próximos ao invés de longas distâncias?", answers: ["Sempre", "Às vezes", "Nunca", "Quando é mais barato"], etapa: 2 },
        { question: "26. Usa transportes elétricos ou híbridos?", answers: ["Sim", "Não", "Parcialmente", "Já usei em viagens"], etapa: 2 },
        { question: "27. Evita poluição sonora e lixo em viagens?", answers: ["Sempre", "Às vezes", "Nunca", "Quando vejo lixo"], etapa: 2 },
        { question: "28. Escolhe viagens com menos impacto ambiental?", answers: ["Sempre", "Às vezes", "Nunca", "Depende da opção"], etapa: 2 },
        { question: "29. Planeja itinerários para economizar combustível?", answers: ["Sempre", "Às vezes", "Nunca", "Quando necessário"], etapa: 2 },
        { question: "30. Prefere turismo ecológico?", answers: ["Sim", "Não", "Às vezes", "Se for uma opção boa"], etapa: 2 },

        // Etapa 3: Perguntas sobre Consumo e Sustentabilidade
        { question: "Na etapa 3, compartilhe seus hábitos relacionados ao consumo consciente", answers: ["Nenhuma", "1-3", "Mais de 3", "Uma vez a cada dois anos"], etapa: 3 },
        { question: "31. Você pratica agricultura urbana ou jardina?", answers: ["Sempre", "Às vezes", "Nunca", "Quero aprender"], etapa: 3 },
        { question: "32. Utiliza produtos biodegradáveis?", answers: ["Sempre", "Às vezes", "Nunca", "Quando consigo encontrar"], etapa: 3 },
        { question: "33. Consome alimentos orgânicos?", answers: ["Sempre", "Às vezes", "Nunca", "Às vezes tento"], etapa: 3 },
        { question: "34. Doa objetos ou roupas que não usa mais?", answers: ["Sempre", "Às vezes", "Nunca", "Quando sobra"], etapa: 3 },
        { question: "35. Evita compras por impulso?", answers: ["Sempre", "Às vezes", "Nunca", "Quando necessário"], etapa: 3 },
        { question: "36. Participa de ações de plantio de árvores?", answers: ["Sim", "Não", "Às vezes", "Quero começar a participar"], etapa: 3 },
        { question: "37. Reduz o uso de ar-condicionado?", answers: ["Sempre", "Às vezes", "Nunca", "Quando faz muito calor"], etapa: 3 },
        { question: "38. Ótica por produtos reciclados?", answers: ["Sempre", "Às vezes", "Nunca", "Quando encontro bons produtos"], etapa: 3 },
        { question: "39. Usa produtos de limpeza ecológicos?", answers: ["Sempre", "Às vezes", "Nunca", "Quero começar a usar"], etapa: 3 },
        { question: "40. Participa de programas de coleta seletiva?", answers: ["Sim", "Não", "Às vezes", "Quando disponível"], etapa: 3 },
        { question: "41. Prefere alternativas ao plástico?", answers: ["Sempre", "Às vezes", "Nunca", "Quando possível"], etapa: 3 },
        { question: "42. Conserta produtos ao invés de descartar?", answers: ["Sempre", "Às vezes", "Nunca", "Quando posso"], etapa: 3 },
        { question: "43. Você costuma escolher produtos com embalagens mais sustentáveis ou reutilizáveis?", answers: ["Sempre", "Às vezes", "Nunca", "Quando é mais fácil"], etapa: 3 },
        { question: "44. Você adota hábitos para reduzir o desperdício de alimentos em casa?", answers: ["Sempre", "Às vezes", "Nunca", "Quando lembro"], etapa: 3 },
        { question: "45. Você tenta reduzir a pegada de carbono ao escolher o modo de transporte no dia a dia?", answers: ["Sempre", "Às vezes", "Nunca", "Quando é possível"], etapa: 3 }
    ];

    
    let currentQuestionIndex = 0;
    let currentEtapa = 1; // Controle inicial da etapa

    // Seletores de elementos HTML
    const questionTitle = document.getElementById("question-title");
    const questionDescription = document.getElementById("question-description");
    const answersContainer = document.getElementById("answers-container");
    const nextBtn = document.getElementById("next-btn");
    const currentStep = document.getElementById("current-step");
    const etapaNotification = document.getElementById("etapa-notification"); // Notificação de etapa

    // Função para carregar uma nova pergunta
    function loadQuestion(index) {
        const question = questions[index];
        questionTitle.textContent = question.question;
        questionDescription.textContent = ""; // Limpa a descrição
        answersContainer.innerHTML = ""; // Limpa as respostas anteriores

        // Verifica mudança de etapa
        if (question.etapa !== currentEtapa) {
            currentEtapa = question.etapa;
            notifyNewEtapa(currentEtapa); // Notifica mudança de etapa
        }

        // Adiciona a interação para a pergunta inicial (sem respostas)
        if (question.answers.length === 0) {
            const hoverBox = document.createElement("div");
            hoverBox.textContent = "Passe o mouse aqui para continuar";
            hoverBox.classList.add("hover-box");
            hoverBox.addEventListener("mouseover", () => {
                nextBtn.disabled = false; // Libera o botão "Próxima Pergunta"
            });
            answersContainer.appendChild(hoverBox);
        } else {
            // Adiciona os botões de resposta
            question.answers.forEach(answer => {
                const button = document.createElement("button");
                button.textContent = answer;
                button.classList.add("answer-btn");
                button.addEventListener("click", () => handleAnswerSelection(button));
                answersContainer.appendChild(button);
            });
        }
    }

    // Função para notificar nova etapa
    function notifyNewEtapa(etapa) {
        etapaNotification.textContent = `Bem-vindo à Etapa ${etapa}!`; // Mostra a mensagem
        etapaNotification.style.display = "block"; // Exibe o elemento
        setTimeout(() => {
            etapaNotification.style.display = "none"; // Oculta a mensagem após 3 segundos
        }, 3000);
    }

    // Função para lidar com a seleção de resposta
    function handleAnswerSelection(button) {
        // Remove a seleção de todas as respostas
        document.querySelectorAll('.answer-btn').forEach(btn => {
            if (btn.classList.contains("selected")) {
                btn.classList.remove("selected");
            }
        });

        // Marca a resposta selecionada
        button.classList.add("selected");
        nextBtn.disabled = false; // Habilita o botão "Próxima Pergunta"
    }

    // Função para passar para a próxima pergunta
    nextBtn.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
            nextBtn.disabled = true; // Desativa o botão até uma nova resposta ser selecionada
        } else {
            alert("Você completou o quiz!");
        }
    });

    // Inicializa com a primeira pergunta
    loadQuestion(currentQuestionIndex);
});
