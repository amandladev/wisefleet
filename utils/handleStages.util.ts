import { NextRouter } from "next/router";

export const handleKeyUp = (setFun: any, event: any) => {
    const key = event.keyCode || event.charCode;
    if (key === 48 || event.target.value[0] == "0") {
      setFun(event.target.value.replace(/^0+/, ""));
    }
  }

export const handleInput = (setFun: any, event: any) => {
    const b = event.target.value;
    const includes = b.includes(".");
    const decimal = b.split(".");
    if (includes == true) {
      if (decimal[1].length > 2) {
        setFun(b.substring(0, b.length - 1));
      } else {
        setFun(b);
      }
    } else {
      b.length > 4
        ? setFun(1.1)
        : b > 0
        ? setFun(b)
        : setFun(0);
    }
  }

export const routing = (route: string, r: NextRouter) => {
  r.push(route);
}

export const handleState = (setFun: any, val: any) => {
  setFun(val)
}

export const handleStringInput = (setFun: any, event: any) => {
    const pattern = /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜ@._,-\s]+$/;

    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚüÜ@._,-\s]/g, "");
    }

    setFun(event.target.value)
}

export const handleNumberInput = (setFun: any, event: any) => {
    const pattern = /^[0-9\s]+$/;

    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚüÜ\s]/g, "");
    }

    setFun(event.target.value)
}