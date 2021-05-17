for(const filename of Deno.args){
    const file = await Deno.open(filename);
    await Deno.copy(file,Deno.stdout)
    const text = new TextEncoder().encode("\n");
    Deno.stdout.write(text);
    file.close;   
}