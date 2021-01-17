const textPt = {
    navbar_sv: "Serviços",
    navbar_about: "Sobre nós",
    navbar_portfolio: "Portfólio",
    navbar_contact: "Fale Conosco",
    title_init: "Criação de sites e plataformas e-commerce",
    information: "Mais informações",
    title_sv: "Serviços",
    card_1: "Identidade visual",
    card_3: "Desenvolvimento sob medida",
    card_4: "Design responsivo",
    card_5: "Relatórios online",
    card_6: "Painel administrativo",
    presentation: `
    <p>A CenterDev é uma agência especializada em encontrar a melhor solução para o seu negócio seja ela, uma loja virtual completamente gerenciável ou apenas um site profissional que dê resultados.</p>

    <p>Nós projetamos, desenvolvemos e gerenciamos sites de alto impacto que geram leads, vendem produtos e contam histórias, sempre se atentando as tecnologias mais atuais</p>

    <p>Com um planejamento estratégico e um equipe coordenada, buscamos entregar aos nosso clientes soluções que proporcionam economia, competitividade e principalmente retorno financeiro</p>`,
    portfolio_title: "Conheça um de nossos projetos",
    card_title: "Ver projeto",
    title_contact: "Fale com a gente",
    subtitle_contact: "Seu contato é muito importante",
    contact_name: "Nome",
    contact_email: "E-mail",
    contact_phone: "Telefone",
    contact_subject: "Assunto",
    contact_message: "Sua mensagem",
    btn_send: "Enviar",
    phone_title: `<i class="fas fa-phone"></i> Telefones`,
    attendance: "Atendimento: (11) 97797-3346",
    att_hour: `Horário de atendimento`,
    days: "De segunda à sexta-feira",
    hour: "Das 9h às 18h",
    right: "© 2020 CenterDev. Todos os direitos reservados.", 
}
const textEn = {
    navbar_sv: "Services",
    navbar_about: "About Us",
    navbar_portfolio: "Portfolio",
    navbar_contact: "Contact us",
    title_init: "Creation of websites and e-commerce platforms",
    information: "More information",
    title_sv: "Services",
    card_1: "Visual identity",
    card_3: "Custom development",
    card_4: "Responsive design",
    card_5: "Online reports",
    card_6: "Administrative panel",
    presentation: `
    <p>CenterDev is an agency specialized in finding the best solution for your business, be it a completely manageable virtual store or just a professional website that gives results.</p>

    <p>We design, develop and manage high impact websites that generate leads, sell products and tell stories, always keeping an eye on the latest technologies</p>

    <p>With a strategic planning and a coordinated team, we seek to deliver to our customers solutions that provide savings, competitiveness and mainly financial return</p>`,
    portfolio_title: "Meet one of our projects",
    card_title: "View project",
    title_contact: "Talk to us",
    subtitle_contact: "Your contact is very important",
    contact_name: "Name",
    contact_email: "Email",
    contact_phone: "Phone",
    contact_subject: "Subject",
    contact_message: "Your message",
    btn_send: "Send",
    phone_title: `<i class="fas fa-phone"></i> Phones`,
    attendance: "Attendance: (11) 97797-3346",
    att_hour: `Opening hours`,
    days: "From Monday to Friday",
    hour: "9am to 6pm",
    right: "© 2020 CenterDev. All rights reserved.", 
    
}

window.onload = ()=>{
    let language = sessionStorage.getItem('language');
    if(language === null || language === 'pt-br'){
        setLanguage(textPt);
    }
    let btnPt = document.getElementById('portuguese');
    btnPt.onclick = (e) => {
        e.preventDefault();
        setLanguage(textPt);
    }
    let btnEng = document.getElementById('english');
    btnEng.onclick = (e) => {
        e.preventDefault();
        setLanguage(textEn);
    }
}
const setLanguage = (text) => {
    let scrolls = document.getElementsByClassName('scroll');
    scrolls[0].innerHTML = text.navbar_sv;
    scrolls[1].innerHTML = text.navbar_about;
    scrolls[2].innerHTML = text.navbar_portfolio;
    scrolls[3].innerHTML = text.navbar_contact;
    scrolls[4].innerHTML = text.navbar_sv;
    scrolls[5].innerHTML = text.navbar_about;
    scrolls[6].innerHTML = text.navbar_portfolio;
    scrolls[7].innerHTML = text.navbar_contact;
    scrolls[8].innerHTML = text.information;

    let title = document.getElementsByClassName('titulo-banner');
    title[0].innerHTML = text.title_init;    
    
    let title_sv = document.getElementById('title_service');
    title_sv.innerHTML = text.title_sv;
    
    let card_title = document.getElementsByClassName('card-title');
    card_title[0].innerHTML = text.card_1;
    card_title[2].innerHTML = text.card_3;
    card_title[3].innerHTML = text.card_4;
    card_title[4].innerHTML = text.card_5;
    card_title[5].innerHTML = text.card_6;
    
    let title_portfolio = document.getElementById('title_portfolio');
    title_portfolio.innerHTML = text.portfolio_title;

    let see_project = document.getElementsByClassName('see-project');
    see_project[0].innerHTML = text.card_title;

    let contact_title = document.getElementsByClassName('ajuda-contato');
    contact_title[0].innerHTML = text.title_contact;

    let subtitle_contact = document.getElementsByClassName('subtitle-contato');
    subtitle_contact[0].innerHTML = text.subtitle_contact;

    let labels = document.getElementsByClassName('label');
    labels[0].innerHTML = text.contact_name;
    labels[1].innerHTML = text.contact_email;
    labels[2].innerHTML = text.contact_phone;
    labels[3].innerHTML = text.contact_subject;
    
    let textarea = document.getElementsByClassName('textarea');
    textarea[0].innerHTML = text.contact_message;
    
    let send = document.getElementById('send');
    send.innerHTML = text.btn_send;
    
    let phone_title = document.getElementsByClassName('phone_title');
    phone_title[0].innerHTML = text.phone_title;

    let attendance = document.getElementsByClassName('attendance');
    attendance[0].innerHTML = text.attendance;

    let att_hour = document.getElementsByClassName('att_hour');
    att_hour[0].innerHTML = text.att_hour;

    let days = document.getElementsByClassName('days');
    days[0].innerHTML = text.days;

    let hour = document.getElementsByClassName('hour');
    hour[0].innerHTML = text.hour;

    let right = document.getElementsByClassName('right');
    right[0].innerHTML = text.right;
}
