export class NodeSet {
    numInputs: number;

    inputs: Node[][];
    output: Node[];

    constructor(numInputs: number){
        this.numInputs = numInputs;

        this.output = [];
        this.inputs = [];

        this.reset();
    }

    addNode(inputIndex: number, value: string, timeStep: number) {
        var copy = new NodeSet(this.numInputs);
        copy.inputs = this.inputs.map((row, index) => index == inputIndex ?
            [...row, { timeStep: timeStep, value: value}] :
            row
        );
        copy.output = this.output;
        return copy;
    }

    addOutput(value: any, timeStep: number) {
        var copy = new NodeSet(this.numInputs);
        copy.inputs = this.inputs;
        copy.output = [...this.output, { timeStep: timeStep, value: value.toString() }];
        return copy;
    }

    reset() {
        this.output = [];
        this.inputs = [];

        for (let i = 0; i < this.numInputs; i++) {
            this.inputs.push([]);
        }
    }
}

export interface Node {
    timeStep: number;
    value: string;
}