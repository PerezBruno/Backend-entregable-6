//se inicia un nuevo proyecto
//en consola:
//*************  npm init -y   *****  en la carpeta src
//colocar: ****  "type":"module"   **** en el package.json


class ContenedorMemoria {
    constructor(){
        this.elements = [
            {
                title: "Calculadora niños",
                price: 875,
                thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
            },
            {
                title: "Camión volcador",
                price: 1600,
                thumbnail: "https://cdn3.iconfinder.com/data/icons/transportation-14/512/Transportation_unloading_truck-256.png"

            }
        ]
    }

    getAll() {
        return this.elements;
    }

    getById(id) {
        const element = this.elements.find((e)=> e.id == id);

        return element;
    }

    save(element){
        element.id = this.elements.length === 0 ? 1 : this.elements[this.elements.length - 1].id + 1

        this.elements.push(element);

        return element;
    }

    updateById (id,newData){
        const elementIndex = this.elements.findIndex((e)=> e.id ==id)

        if(elementIndex === -1) return {error:true}

        this.elements[elementIndex] = {
            ...this.elements[elementIndex],
            ...newData
        };
        return this.elements[elementIndex];
    }

    deleteById(id){
        const elementIndex = this.elements.findIndex((e)=> e.id ==id)

        if(elementIndex === -1) return {error:true}

        this.elements = this.elements.filter((e)=> e.id != id);

        return {error:false};
    }

}

export {ContenedorMemoria};