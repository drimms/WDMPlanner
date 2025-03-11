export interface IProps {
    index: string;
};

export interface IFiber {
    span: number;
    fiberType: string;
    totalLoss: number;
};

export interface IUnit {
    type: string,
    mode: string,
    payload: string,
    power: number,
    title: string
};

export interface IAmplifier {
    type: string;
    gain: number;
    nf: number;
};

export interface IMux {
    totalLoss: number
}
