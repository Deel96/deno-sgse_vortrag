import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {books} from "./books.ts"
/**
 * Simple Rest Server
 */
export class App{
    public app:Application;
    /**
     * cosntructor of server
     */
    constructor(){
        this.app = new Application();
        const router = new Router();

        router.
            get("/",(context)=>{
                context.response.body="Welcome to my bookstore";
            })
            .get("/books",(context)=>{
                context.response.body = Array.from(books.values());
            })
            .get("/books/:id",(context)=>{
                if(context?.params?.id){
                context.response.body = books.get(context.params.id);
            }
            })


        this.app.use(router.routes());
        this.app.use(router.allowedMethods())
    }

    /**
     * Starts the server with the given port
     * @param port port of the server
     */
    public async start(port:number):Promise<void>{
        console.log(`Running on port ${port}`);
        await this.app.listen({port: port});
    }
}