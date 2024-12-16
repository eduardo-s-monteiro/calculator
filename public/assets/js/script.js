document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        { question: "Compartilhe seus hábitos sustentáveis e práticas ambientais em casa e no cotidiano", type: "text", etapa: 1 },
        { question: "1. Com que frequência você recicla lixo?", answers: ["Sempre", "Com boa frequência", "Raramente", "Nunca"], etapa: 1, points: [1, 2, 3, 4] },
        { question: "2. Você usa lâmpadas de LED em casa?", answers: ["Sim", "Não"], etapa: 1, points: [1, 3] },
        { question: "3. Evita usar plástico descartável?", answers: ["Sempre", "Às vezes", "Quase nunca", "Nunca"], etapa: 1, points: [1, 2, 3, 4] },
        { question: "4. Você aproveita restos de comida?", answers: ["Sempre", "Às vezes", "Nunca", "Às vezes sim, às vezes não"], etapa: 1, points: [1, 2, 3, 2] },
        { question: "5. Compra roupas usadas ou de brechó?", answers: ["Sim", "Não", "Às vezes", "Prefiro novas"], etapa: 1, points: [1, 3, 2, 4] },
        { question: "6. Prefere produtos locais?", answers: ["Sempre", "Às vezes", "Nunca", "Quando disponível"], etapa: 1, points: [1, 2, 3, 2] },
        { question: "7. Separa resíduos orgânicos de recicláveis?", answers: ["Sempre", "Às vezes", "Nunca", "Às vezes erro"], etapa: 1, points: [1, 2, 3, 4] },
        { question: "8. Utiliza sacolas reutilizáveis?", answers: ["Sim", "Não", "Às vezes", "Nunca me lembrei"], etapa: 1, points: [1, 3, 2, 4] },
        { question: "9. Diminui o consumo de carne?", answers: ["Sempre", "Às vezes", "Nunca", "Tento reduzir"], etapa: 1, points: [1, 2, 3, 2] },
        { question: "10. Você pratica compostagem?", answers: ["Sim", "Não", "Às vezes", "Quero aprender"], etapa: 1, points: [1, 3, 2, 4] },
        { question: "11. Prefere energia renovável?", answers: ["Sim", "Não", "Parcialmente", "Às vezes sim"], etapa: 1, points: [1, 3, 2, 4] },
        { question: "12. Deixa luzes apagadas quando sai?", answers: ["Sempre", "Às vezes", "Nunca", "Depende da situação"], etapa: 1, points: [1, 2, 3, 4] },
        { question: "13. Economiza água?", answers: ["Sempre", "Às vezes", "Nunca", "Quando lembro"], etapa: 1, points: [1, 2, 3, 4] },
        { question: "14. Utiliza transporte público?", answers: ["Sempre", "Às vezes", "Nunca", "Quando possível"], etapa: 1, points: [1, 2, 3, 4] },
        { question: "15. Planeja suas compras para evitar desperdício?", answers: ["Sim", "Não", "Às vezes", "Quando necessário"], etapa: 1, points: [1, 3, 2, 4] },
        { question: "Na etapa 2, compartilhe seus hábitos relacionados às compras", etapa: 2 },
        { question: "16. Quantas vezes você viaja de avião por ano?", answers: ["Nenhuma", "1-3", "Mais de 3", "Uma vez a cada dois anos"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "17. Você compartilha caronas?", answers: ["Sempre", "Às vezes", "Nunca", "Compartilho com amigos"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "18. Prefere transporte público em viagens?", answers: ["Sempre", "Às vezes", "Nunca", "Quando possível"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "19. Evita dirigir sozinho em longas viagens?", answers: ["Sempre", "Às vezes", "Nunca", "Depende do destino"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "20. Ótica por hospedagens sustentáveis?", answers: ["Sim", "Não", "Às vezes", "Quando encontro opções boas"], etapa: 2, points: [1, 3, 2, 4] },
        { question: "21. Participa de turismo comunitário?", answers: ["Sim", "Não", "Às vezes", "Em viagens locais"], etapa: 2, points: [1, 3, 2, 4] },
        { question: "22. Utiliza bicicletas ou patinetes em viagens?", answers: ["Sempre", "Às vezes", "Nunca", "Quando é uma opção fácil"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "23. Reduz viagens aéreas curtas?", answers: ["Sempre", "Às vezes", "Nunca", "Quando possível"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "24. Compensa emissões de carbono de suas viagens?", answers: ["Sim", "Não", "Não sei", "Quero começar a fazer"], etapa: 2, points: [1, 3, 2, 4] },
        { question: "25. Viaja para locais próximos ao invés de longas distâncias?", answers: ["Sempre", "Às vezes", "Nunca", "Quando é mais barato"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "26. Usa transportes elétricos ou híbridos?", answers: ["Sim", "Não", "Parcialmente", "Já usei em viagens"], etapa: 2, points: [1, 3, 2, 4] },
        { question: "27. Evita poluição sonora e lixo em viagens?", answers: ["Sempre", "Às vezes", "Nunca", "Quando vejo lixo"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "28. Escolhe viagens com menos impacto ambiental?", answers: ["Sempre", "Às vezes", "Nunca", "Depende da opção"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "29. Planeja itinerários para economizar combustível?", answers: ["Sempre", "Às vezes", "Nunca", "Quando necessário"], etapa: 2, points: [1, 2, 3, 4] },
        { question: "30. Prefere turismo ecológico?", answers: ["Sim", "Não", "Às vezes", "Se for uma opção boa"], etapa: 2, points: [1, 3, 2, 4] },
        { question: "Na etapa 3, compartilhe seus hábitos relacionados ao consumo consciente", etapa: 3 },
        { question: "31. Você pratica agricultura urbana ou jardina?", answers: ["Sempre", "Às vezes", "Nunca", "Quero aprender"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "32. Utiliza produtos biodegradáveis?", answers: ["Sempre", "Às vezes", "Nunca", "Quando consigo encontrar"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "33. Consome alimentos orgânicos?", answers: ["Sempre", "Às vezes", "Nunca", "Às vezes tento"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "34. Doa objetos ou roupas que não usa mais?", answers: ["Sempre", "Às vezes", "Nunca", "Quando sobra"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "35. Evita compras por impulso?", answers: ["Sempre", "Às vezes", "Nunca", "Quando necessário"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "36. Participa de ações de plantio de árvores?", answers: ["Sim", "Não", "Às vezes", "Quero começar a participar"], etapa: 3, points: [1, 3, 2, 4] },
        { question: "37. Reduz o uso de ar-condicionado?", answers: ["Sempre", "Às vezes", "Nunca", "Quando faz muito calor"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "38. Ótica por produtos reciclados?", answers: ["Sempre", "Às vezes", "Nunca", "Quando encontro bons produtos"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "39. Usa produtos de limpeza ecológicos?", answers: ["Sempre", "Às vezes", "Nunca", "Quero começar a usar"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "40. Participa de programas de coleta seletiva?", answers: ["Sim", "Não", "Às vezes", "Quando disponível"], etapa: 3, points: [1, 3, 2, 4] },
        { question: "41. Prefere alternativas ao plástico?", answers: ["Sempre", "Às vezes", "Nunca", "Quando possível"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "42. Conserta produtos ao invés de descartar?", answers: ["Sempre", "Às vezes", "Nunca", "Quando posso"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "43. Você costuma escolher produtos com embalagens mais sustentáveis ou reutilizáveis?", answers: ["Sempre", "Às vezes", "Nunca", "Quando é mais fácil"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "44. Você adota hábitos para reduzir o desperdício de alimentos em casa?", answers: ["Sempre", "Às vezes", "Nunca", "Quando lembro"], etapa: 3, points: [1, 2, 3, 4] },
        { question: "45. Você tenta reduzir a pegada de carbono ao escolher o modo de transporte no dia a dia?", answers: ["Sempre", "Às vezes", "Nunca", "Quando é possível"], etapa: 3, points: [1, 2, 3, 4] }
    ];

    const elements = {
        questionTitle: document.getElementById("question-title"),
        questionDescription: document.getElementById("question-description"),
        answersContainer: document.getElementById("answers-container"),
        nextBtn: document.getElementById("next-btn"),
        currentStep: document.getElementById("current-step"),
        etapaNotification: document.getElementById("etapa-notification"),
        resultContainer: document.getElementById("result-container")
    };

    let currentQuestionIndex = 0;
    let currentEtapa = 1;
    let totalPoints = 0;

    function loadQuestion(index) {
        const question = questions[index];
        updateQuestionUI(question);
        if (question.etapa !== currentEtapa) {
            currentEtapa = question.etapa;
            notifyNewEtapa(currentEtapa);
            elements.currentStep.textContent = currentEtapa;
        }
        renderAnswers(question);
    }

    function updateQuestionUI(question) {
        elements.questionTitle.textContent = question.question;
        elements.questionDescription.textContent = "";
        elements.answersContainer.innerHTML = "";
    }

    function renderAnswers(question) {
        if (Array.isArray(question.answers) && question.answers.length > 0) {
            question.answers.forEach((answer, idx) => {
                const button = createAnswerButton(answer, idx, question);
                elements.answersContainer.appendChild(button);
            });
        }
        createHoverBox();
    }

    function createAnswerButton(answer, index, question) {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => handleAnswerSelection(button, index, question));
        return button;
    }

    function createHoverBox() {
        const hoverBox = document.createElement("div");
        hoverBox.textContent = "Passe o mouse aqui para continuar";
        hoverBox.classList.add("hover-box");
        hoverBox.addEventListener("mouseover", () => {
            elements.nextBtn.disabled = false;
        });
        elements.answersContainer.appendChild(hoverBox);
    }

    function notifyNewEtapa(etapa) {
        elements.etapaNotification.textContent = `Bem-vindo à Etapa ${etapa}!`;
        elements.etapaNotification.style.display = "block";
        setTimeout(() => {
            elements.etapaNotification.style.display = "none";
        }, 3000);
    }

    function handleAnswerSelection(selectedButton, answerIndex, question) {
        deselectAllButtons();
        selectedButton.classList.add("selected");
        elements.nextBtn.disabled = false;

        if (question.points && question.points.length > 0) {
            totalPoints += question.points[answerIndex];
        }
    }


    function deselectAllButtons() {
        document.querySelectorAll(".answer-btn").forEach(button => {
            button.classList.remove("selected");
        });
    }

    elements.nextBtn.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
            elements.nextBtn.disabled = true;
        } else {
            showCarbonFootprintResult();
        }
    });

    function showCarbonFootprintResult() {
        const carbonFootprint = totalPoints * 0.5;

        elements.resultContainer.innerHTML = `
            <h2>Resultado</h2>
            <p>Sua pegada de carbono estimada é: ${carbonFootprint.toFixed(2)} toneladas de CO2 por ano.</p>
            <p>Continue adotando práticas sustentáveis para reduzir sua pegada de carbono!</p>
        `;
        elements.resultContainer.style.display = "block";
        document.getElementById("quiz-container").style.display = "none";
    }

    loadQuestion(currentQuestionIndex);
});