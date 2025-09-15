import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { toolCategories } from "@/lib/routes";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 container mx-auto px-4 py-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          常用网页工具的汇集网站
        </p>
      </section>

      <section className="max-w-6xl mx-auto w-full">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {toolCategories.map(category => (
            <Card
              key={category.title}
              className="overflow-hidden border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <CardHeader className="bg-muted/30 pb-3">
                <div className="flex items-center gap-2">
                  <category.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <CardDescription className="mt-2 text-sm">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-border/50">
                  {category.tools.map(tool => (
                    <li key={tool.name} className="group">
                      <Link
                        href={tool.path}
                        className="flex items-center justify-between p-3 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm mb-0.5 text-primary/90">
                            {tool.name}
                          </h3>
                          <p className="text-xs text-muted-foreground truncate">
                            {tool.description}
                          </p>
                        </div>
                        <span className="text-primary opacity-60 group-hover:opacity-100 flex items-center ml-3 shrink-0">
                          使用
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <div className="p-6 bg-muted/30 rounded-lg max-w-4xl mx-auto">
           91java.com
        </div>
      </section>
    </div>
  );
}
