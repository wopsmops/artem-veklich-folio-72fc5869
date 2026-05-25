import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Nav, MobileTabBar } from "@/components/Nav";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "#0F1117" }}>
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold" style={{ color: "#EFEFEF" }}>404</h1>
        <p className="mt-2 text-sm" style={{ color: "#585858" }}>
          this page doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" style={{ color: "#F59E0B", fontSize: 13 }}>
            ← home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "#0F1117" }}>
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold" style={{ color: "#EFEFEF" }}>
          something went wrong
        </h1>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md px-4 py-2 text-sm"
            style={{ background: "#F59E0B", color: "#0F1117" }}
          >
            try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "artem veklich" },
      { name: "description", content: "Portfolio of artem veklich — networks, transport systems, hardware, applied engineering." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ background: "#0F1117" }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ background: "#0F1117", minHeight: "100vh", color: "#EFEFEF" }}>
        <Nav />
        <main className="pb-[72px] md:pb-0">
          <Outlet />
        </main>
        <MobileTabBar />
      </div>
    </QueryClientProvider>
  );
}
