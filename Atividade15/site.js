const informacoesCursos = {
    "Análise e Desenvolvimento de Sistemas": "Forma profissionais para atuar com desenvolvimento de software, banco de dados e sistemas web/mobile.",
    "Eletrônica Automotiva": "Forma profissionais especializados em sistemas eletrônicos embarcados em veículos.",
    "Fabricação Mecânica": "Forma profissionais para atuar em processos de usinagem e produção mecânica.",
    "Logística": "Forma profissionais para gestão da cadeia de suprimentos e distribuição de produtos.",
    "Manufatura Avançada": "Forma profissionais voltados à indústria 4.0 e automação de processos produtivos.",
    "Polímeros": "Forma profissionais especializados em materiais poliméricos e sua aplicação industrial.",
    "Processos Metalúrgicos": "Forma profissionais para atuar em processos de transformação de metais.",
    "Projetos Mecânicos": "Forma profissionais para desenvolvimento e projeto de sistemas mecânicos.",
    "Sistemas Biomédicos": "Forma profissionais para atuar com equipamentos e tecnologias na área da saúde."
};

function confirmarCurso() {
    const select = document.getElementById('cursos');
    const curso = select.value;

    if (curso === "") return;

    const confirmar = confirm("Deseja realmente abrir a janela do curso: " + curso + "?");

    if (confirmar) {
        abrirJanelaCurso(curso);
    } else {
        select.value = "";
    }
}

function abrirJanelaCurso(curso) {
    const janela = window.open("", "_blank", "width=600,height=300");

    janela.document.write(`
        <html>
        <head><title>${curso}</title></head>
        <body style="font-family: sans-serif; padding: 20px;">
            <h2>${curso}</h2>
            <p>${informacoesCursos[curso]}</p>
        </body>
        </html>
    `);
}