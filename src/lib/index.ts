// place files you want to import through the `$lib` alias in this folder.

class CPU {
  public code: string = ""
  public memory: Uint8Array

  public PC: number

  constructor(memory_size: number = 0xF) {
    this.memory = new Uint8Array(memory_size)
  }
}
