    var pedido =  {
        numero: 11111,
        horasPrazo: 24,
        horasRestante: 3,
        tipoCliente: 'premium',
        valorPedido: 500,
        distanciaKm: 3,

    }

    let pontosTotal = 0

        if (pedido.horasRestante <= 2){
            pontosTotal += 50;
        } else if (pedido.horasRestante <= 6){
            pontosTotal += 30;
        } else {
            pontosTotal += 10;
        }

        if (pedido.tipoCliente === 'vip'){
        pontosTotal += 40;
        } else if (pedido.tipoCliente === 'premium'){
            pontosTotal += 25;
        } else if (pedido.tipoCliente === 'normal'){
            pontosTotal += 10;
        }
            

        if(pedido.valorPedido >= 500){
            pontosTotal += 30;
        } else if (pedido.valorPedido >= 200){
            pontosTotal += 20;
        } else {
            pontosTotal += 10;
        }

        if (pedido.distanciaKm <= 5){
            pontosTotal += 25;
        } else if (pedido.distanciaKm <= 15){
            pontosTotal += 15;
        } else {
            pontosTotal += 5;
        }

            
            if (pontosTotal >= 120){
                console.log (`Pontuação: ${pontosTotal}`);
                console.log ('PEDIDO URGENTE!!');
            } else if (pontosTotal >= 80){
                console.log (`Pontuação: ${pontosTotal}`);
                console.log ('PRIORIDADE ALTA!!');
            } else if (pontosTotal >= 50){
                console.log (`Pontuação: ${pontosTotal}`);
                console.log ('PRIORIDADE MÉDIA!!');
            } else {
                console.log (`Pontuação: ${pontosTotal}`);
                console.log ('PRIORIDADE BAIXA!!')
            }