let sintomas = document        .getElementById("sintomas")        .value        .toLowerCase();
    let cultura = document        .getElementById("cultura")        .value;
    let resultado = document.getElementById("resultado");
    let diagnostico = "";    let confianca = "";
    // OÍDIO    if (        sintomas.includes("pó branco") ||        sintomas.includes("po branco")    ) {
        diagnostico = `        <h3>Oídio</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 95%</p>
        <p><strong>Sintomas:</strong> Camada branca semelhante a pó sobre folhas e caules.</p>
        <p><strong>Tratamento Orgânico:</strong> Aplicação de leite diluído, óleo de neem e enxofre agrícola.</p>
        <p><strong>Tratamento Convencional:</strong> Fungicidas registrados para a cultura.</p>
        <p><strong>Prevenção:</strong> Melhor ventilação entre as plantas e monitoramento frequente.</p>        `;    }
    // FERRUGEM    else if (        sintomas.includes("manchas amarelas") ||        sintomas.includes("manchas alaranjadas")    ) {
        diagnostico = `        <h3>Ferrugem</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 92%</p>
        <p><strong>Sintomas:</strong> Manchas amarelas ou alaranjadas nas folhas.</p>
        <p><strong>Tratamento Orgânico:</strong> Calda bordalesa e remoção de folhas afetadas.</p>
        <p><strong>Tratamento Convencional:</strong> Fungicidas específicos para ferrugem.</p>
        <p><strong>Prevenção:</strong> Uso de variedades resistentes.</p>        `;    }
    // MÍLDIO    else if (        sintomas.includes("manchas oleosas") ||        sintomas.includes("folhas amareladas")    ) {
        diagnostico = `        <h3>Míldio</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 90%</p>
        <p><strong>Sintomas:</strong> Manchas amareladas e aspecto oleoso nas folhas.</p>
        <p><strong>Tratamento Orgânico:</strong> Calda bordalesa.</p>
        <p><strong>Tratamento Convencional:</strong> Fungicidas protetores.</p>
        <p><strong>Prevenção:</strong> Evitar excesso de umidade.</p>        `;    }
    // ANTRACNOSE    else if (        sintomas.includes("manchas escuras") ||        sintomas.includes("lesões escuras")    ) {
        diagnostico = `        <h3>Antracnose</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 88%</p>
        <p><strong>Sintomas:</strong> Lesões escuras em folhas, frutos e ramos.</p>
        <p><strong>Tratamento Orgânico:</strong> Poda das partes afetadas.</p>
        <p><strong>Tratamento Convencional:</strong> Fungicidas registrados.</p>
        <p><strong>Prevenção:</strong> Rotação de culturas.</p>        `;    }
    // MANCHA BACTERIANA    else if (        sintomas.includes("manchas marrons") ||        sintomas.includes("pontos escuros")    ) {
        diagnostico = `        <h3>Mancha Bacteriana</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 87%</p>
        <p><strong>Sintomas:</strong> Pequenas manchas escuras nas folhas.</p>
        <p><strong>Tratamento Orgânico:</strong> Caldas à base de cobre.</p>
        <p><strong>Tratamento Convencional:</strong> Bactericidas recomendados.</p>
        <p><strong>Prevenção:</strong> Utilização de sementes sadias.</p>        `;    }
    // CERCOSPORIOSE    else if (        sintomas.includes("lesões circulares") ||        sintomas.includes("centro claro")    ) {
        diagnostico = `        <h3>Cercosporiose</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 89%</p>
        <p><strong>Sintomas:</strong> Lesões circulares com centro claro.</p>
        <p><strong>Tratamento Orgânico:</strong> Calda bordalesa.</p>
        <p><strong>Tratamento Convencional:</strong> Fungicidas específicos.</p>
        <p><strong>Prevenção:</strong> Eliminação de restos culturais.</p>        `;    }
    // MOFO BRANCO    else if (        sintomas.includes("algodão branco") ||        sintomas.includes("mofo branco")    ) {
        diagnostico = `        <h3>Mofo Branco</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 94%</p>
        <p><strong>Sintomas:</strong> Crescimento branco semelhante a algodão.</p>
        <p><strong>Tratamento Orgânico:</strong> Controle biológico com Trichoderma.</p>
        <p><strong>Tratamento Convencional:</strong> Fungicidas específicos.</p>
        <p><strong>Prevenção:</strong> Reduzir excesso de umidade.</p>        `;    }
    // MOSAICO VIRAL    else if (        sintomas.includes("mosaico") ||        sintomas.includes("folhas deformadas")    ) {
        diagnostico = `        <h3>Mosaico Viral</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 91%</p>
        <p><strong>Sintomas:</strong> Folhas deformadas e manchas irregulares.</p>
        <p><strong>Tratamento Orgânico:</strong> Eliminação das plantas afetadas.</p>
        <p><strong>Tratamento Convencional:</strong> Controle dos insetos vetores.</p>
        <p><strong>Prevenção:</strong> Monitoramento constante da lavoura.</p>        `;    }
    // PODRIDÃO RADICULAR    else if (        sintomas.includes("raízes apodrecendo") ||        sintomas.includes("raizes apodrecendo")    ) {
        diagnostico = `        <h3>Podridão Radicular</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 93%</p>
        <p><strong>Sintomas:</strong> Raízes escuras e deterioradas.</p>
        <p><strong>Tratamento Orgânico:</strong> Melhorar drenagem do solo.</p>
        <p><strong>Tratamento Convencional:</strong> Fungicidas apropriados.</p>
        <p><strong>Prevenção:</strong> Evitar encharcamento.</p>        `;    }
    // FUSARIOSE    else if (        sintomas.includes("murcha") ||        sintomas.includes("amarelecimento")    ) {
        diagnostico = `        <h3>Fusariose</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 85%</p>
        <p><strong>Sintomas:</strong> Murcha gradual e amarelecimento das folhas.</p>
        <p><strong>Tratamento Orgânico:</strong> Rotação de culturas.</p>
        <p><strong>Tratamento Convencional:</strong> Controle químico recomendado.</p>
        <p><strong>Prevenção:</strong> Uso de cultivares resistentes.</p>        `;    }
    // REQUEIMA    else if (        sintomas.includes("bordas queimadas") ||        sintomas.includes("folhas secando")    ) {
        diagnostico = `        <h3>Requeima</h3>
        <p><strong>Cultura:</strong> ${cultura}</p>
        <p><strong>Confiança:</strong> 86%</p>
        <p><strong>Sintomas:</strong> Folhas com aspecto queimado.</p>
        <p><strong>Tratamento Orgânico:</strong> Calda bordalesa.</p>
        <p><strong>Tratamento Convencional:</strong> Fungicidas específicos.</p>
        <p><strong>Prevenção:</strong> Controle da umidade.</p>        `;    }
    else {
        diagnostico = `        <h3>Diagnóstico não identificado</h3>
        <p>        O sistema não encontrou uma doença compatível com os sintomas informados.        Tente descrever melhor os sinais observados na planta.        </p>
        <p><strong>Exemplos:</strong></p>
        <ul>            <li>Manchas amarelas</li>            <li>Pó branco</li>            <li>Mofo branco</li>            <li>Murcha</li>            <li>Folhas deformadas</li>            <li>Raízes apodrecendo</li>        </ul>        `;    }
    resultado.innerHTML = diagnostico;}
