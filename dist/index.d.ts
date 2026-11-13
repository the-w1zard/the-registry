declare const EventEmitter: any;
type FlushCallback = () => V;
export declare const rv: <T>(v: UF<T>) => T;
export declare const sameValue: (a: A, b: A) => B;
export declare class Registry extends EventEmitter {
    #private;
    _byteid(): string;
    _sid(): string;
    b(): string;
    r: string;
    m: string;
    s: string;
    DEVTOOLS_ACTIVE: boolean;
    constructor();
    _globalNotifyCache: WeakMap<any, Map<any, () => void>>;
    _notifyCache: WeakMap<Map<any, Set<(value: A) => void>>, Map<any, () => void>>;
    scheduleGlobalNotify(key: string | symbol, meta: A, opts: ScopeOptions): void;
    scheduleNotify(key: A, _listeners: M2<A, Set<(value: A) => void>>, _state: Map<A, A>): void;
    getMap<K, V>(slave?: A, master?: A, rk?: A): M2<K, V>;
    getMetadata(s?: string, m?: string, r?: string): any;
    store: {
        get: <T = A>(key: A, opts?: ScopeOptions) => T | undefined;
        set: <T = A>(key: A, value: T | ((prev: T | undefined) => T), opts?: {
            triggerRender?: boolean;
            cap?: number;
        } & ScopeOptions) => any;
        subscribe: <T = A>(key: A, listener: (value: T) => void, opts?: ScopeOptions) => (() => void);
        delete: (key: A, opts?: ScopeOptions) => boolean;
        entries: <T = A>(opts?: ScopeOptions) => [A, T][];
        persist: (key: A, opts?: ScopeOptions) => void;
        unpersist: (key: A, opts?: ScopeOptions) => void;
        has: (key: A, opts?: ScopeOptions) => boolean;
        clear: (opts?: ScopeOptions) => void;
        clearPersistent: (opts?: ScopeOptions) => void;
        _emit: (key: string | symbol, sl_reg?: string, ms_reg?: string, globalKey?: string) => void;
    };
    state: {
        get: <T = A>(key: string | symbol, opts?: ScopeOptions) => T | undefined;
        set: <T = A>(key: string | symbol, value: T | ((prev: T | undefined) => T), opts?: {
            triggerRender?: boolean;
        } & ScopeOptions) => void;
        delete: (key: string | symbol, opts?: ScopeOptions) => boolean;
        getByPrefix: <T = A>(prefix: string, opts?: ScopeOptions) => {
            key: string;
            value: T;
        }[];
        getAll: <T = A>(opts?: ScopeOptions) => Record<string | symbol, T>;
        subscribe: <T = A>(key: string | symbol, listener: (value: T) => void, opts?: ScopeOptions) => (() => void);
        subscribeAll: (listener: (key: string | symbol, value: A) => void, opts?: ScopeOptions) => (() => void);
        clear: (opts?: ScopeOptions) => void;
        waitFor: <T = A>(key: string | symbol, opts?: ScopeOptions) => Promise<T>;
    };
    onFlush(cb: FlushCallback): void;
    scheduleDrain(): void;
    drain(): void;
    set(key: A, value: A): this;
    setLazy(key: A, make: () => A): this;
    delete(key: A): boolean;
    clear(): void;
    subscribe(fn: (value: A, prev: A, key: S) => V): () => V;
    subscribe(key: S, fn: (value: A, prev: A, key: S) => V, opts?: {
        immediate?: B;
    }): () => V;
    subscribe(key: S, opts?: {
        immediate?: B;
    }): AsyncGenerator<A, V, U>;
    unsubscribeAll(fns: Iterable<FN>): void;
    subscribersOf(keys: S[]): A;
    get<T = A>(key: S): T | UD;
    get<T = A>(key: S, fallback: T): T;
    getAll(): A;
    has(key: A): boolean;
    freeze(): void;
    wait(key: A, { predicate, timeout, immediate, signal }?: A): Promise<any>;
    waitChange(key: A, opts?: {}): Promise<any>;
    waitFor(key: A, predicate: A, opts?: {}): Promise<any>;
    setIfAbsent(key: A, value: U): boolean;
    setIfPresent(key: A, value: U): boolean;
    replace(key: A, value: U): boolean;
    update(key: A, fn: (old: A, has: B) => A, initial: U): any;
    inc(key: A, by?: number): number;
    touch(key: A): boolean;
    toJSON(): OB<any>;
    entries(): A2I<[any, any]>;
    keys(): A2I<any>;
    values(): A2I<any>;
    find(pred: A): [any, any];
    findKey(pred: A): any;
    group(fn: A): M2I<unknown, A2<any>>;
    pick(keys: A): M2I<any, any>;
    omit(keys: A): M2I<any, any>;
    snapshot(): A;
    equals(other: A): boolean;
    snapshotSubs(): M2I<any, any>;
    nextWaiterId: number;
    private nextDeferId;
    private draining;
    private drainAgain;
    private deferStats;
    private autoCloud;
    private warnedUseBeforeReady;
    private ENV_STATE;
    private shout;
    /** the results view — computed from the ONE registry, stored nowhere */
    get results(): RO<Array<ResultRecord>>;
    get size(): N;
    static readonly MODULE_LEVEL_CANDIDATES: readonly ["typescript", "rollup", "vite", "eslint", "babel", "postcss", "tailwindcss", "@babel/core", "prettier", "stylelint", "sass", "less", "jest", "vitest", "playwright", "@types/vscode"];
    static readonly PLATFORM_CANDIDATES: readonly ["PROJECT_PLATFORM_KILLER", "react", "preact", "@remix-run/react", "@react-router/react", "next", "nuxt", "svelte", "solid", "vite", "arfa", "vue", "angular", "astro", "gatsby", "dojo", "inferno", "lupine", "ember-source", "backbone", "alpinejs", "lit", "marko", "@builder.io/qwik", "solid-start", "@sveltejs/kit", "meteor", "stencil", "aurelia", "nodiff", "qwik", "velo-type", "webpack"];
    static readonly COMPILER_CANDIDATES: readonly ["rspack", "webpack", "vite", "rollup", "esbuild", "swc-loader", "babel", "next", "nuxt", "@remix-run/react", "@react-router/react", "svelte", "solid", "vue", "@swc/core", "turbopack", "parcel", "tsup", "unbuild", "esbuild-loader", "@babel/core", "terser", "@angular/core", "@angular/compile"];
    static readonly BUNDLER_CANDIDATES: readonly ["bun", "pnpm", "yarn", "npm"];
    static readonly ADAPTER_CANDIDATES: readonly ["websocket_dev_server", "cross_app_ws_server", "terminal_ngin_proxy_register", "terminal_ngin_proxy", "workspace_hub_server", "workspace_hub_client", "cross_app_ws_client", "cse_cross_app_server", "cse_cross_app_client", "shared_worker", "service_worker", "unix_worker", "broadcastr_channel", "websocket", "websocket_server", "websocket_client", "webrtc", "webrtc_server", "webrtc_client", "electron_server", "electron_client", "mqtt", "sse", "named_pipe", "worker_thread", "native_msg_host", "native_msg_client"];
    static readonly CAPABILITY_CANDIDATES: readonly ["shared_worker", "service_worker", "unix_worker", "broadcastr_channel", "electron_server", "electron_client", "named_pipe", "native_msg_host", "native_msg_client"];
    maelstrom: {
        (): void;
        log: (where: S, detail?: R, type?: "info" | "success" | "warn" | "error") => void; /** resolve a specifier relative to THIS file, always. Absolute out. */
        key_for: (specifier: S) => S;
        normalizeFallback: <F>(fallback: F | (() => F) | undefined, fallbackDefault: () => F) => () => F; /** the safe proxy — missing module access is suppressed, never crashed */
        createSafeProxy: () => A;
        toNamespace: (m: A) => A;
        blind: {
            (): void;
            /** dynamic import with no static dependency — works in every module system */
            import: (s: string) => Promise<any>;
            /** require with no static dependency — null where require does not exist (browser/ESM) */
            require: (s: string) => A;
        };
        has: {
            (): void;
            bun: boolean;
            node: boolean;
            /** does a local file exist, resolved from cwd — the has_local probe */
            local: (filePath: S | undefined, module?: S) => B;
            require: boolean;
        };
        is: {
            (): void;
            require_available: () => B;
            browser: boolean;
            VSCode: string;
            electron: boolean;
            unix: boolean;
            windows: boolean;
        };
        /**
         * Record an outcome. This is the single funnel: it tags the registry entry, notifies the
         * entry's subscribers, advances every waiter on the label, and releases deferred tasks.
         * It writes to the ONE registry — it creates no maps.
         */
        record: <T>(label: S, solver: Solver, value: T | undefined, store?: StoreKind) => void;
        rift: {
            <T = any>(name: S): RiftLike<T>;
            clear: (() => V) | (() => V);
            inspect: () => R;
            /** guard — wait for a rift, then run a fn on its unlock value */
            guard: <T, R>(name: string, fn: (unlockValue: T) => R | Promise<R>, timeoutMs?: number) => void;
            /** async load with inflight dedupe — same key always resolves to the same promise */
            load: <T = any>(specifier: S) => Promise<T>;
            result: <T = any>(label: S) => ResultRecord<T> | undefined;
            resultsFrom: (solver: Solver) => ResultRecord[];
            onResult: (listener: (r: ResultRecord) => V) => (() => V);
            place: <T = any>(label: S, value: T, store?: StoreKind) => V;
            get_value: <T = any>(label: S) => T | undefined;
            read: <T = any>(label: S, store?: StoreKind) => T | undefined;
            reset: (name: S) => V;
            delete: (name: S) => B;
            bandit: <T = any>(label: S, module?: A, wait?: N, store?: StoreKind) => A;
            create: <T = any>(label: S, module: T, store?: StoreKind) => A;
            use: <T = any>(label: S, wait?: N, apparation?: T, store?: StoreKind) => A;
            resolve: {
                <T = any>(name: S, v: T): A;
                global: <T = any>(name: S, wait?: N, fallback?: T) => A;
            };
            has: (module: S) => B;
            make: <T = any>() => RiftLike<T>;
            conjure: {
                <T = any, F = any>(options: OPTIONAL_IMPORT_OPTIONS<T, F>): A;
                get: <T = any>(label: S, cache?: B, module?: B) => A;
                uncached: <T = any, F = any>(options: OPTIONAL_IMPORT_OPTIONS<T, F>) => A;
            };
            use_if_available: <T = any>(label: S, filePath: S, comp_name: S, fallback: T, opts?: {
                store?: StoreKind;
            }) => T;
            probe: <T = any>(label: S, filePath: S, comp_name: S, fallback: T) => T;
            guard_promise_gate: (get: A, name: string, fn: A, timeoutMs?: number) => () => Promise<R>;
        };
        module: {
            <T = any>(module: S, filePath?: S): T | Promise<T>;
            extract_named: (ns: A, comp_name: S) => A;
            init: {
                (label: S, module?: B): A;
                named_export: (label: S, comp_name: S, cache?: B, module?: B) => A;
            };
            named_export: <T = any>(label: S, comp_name: S, module?: B) => A;
            check: (moduleName: S) => Promise<B>;
            isLoaded: (specifier: S) => B;
            getLoaded: <T = any>(specifier: S) => OPT<T>;
            /**
             * Find a named export across every loaded module.
             * Ambiguous finds throw — the index never silently guesses.
             */
            export_of: <T = any>(name: S, specifier?: S) => OPT<T>;
            indexExports: (rift: A, key: S, mod: A) => void;
            require: <T = any>(specifier: S) => T;
        };
        waiter: {
            (deps: S | S[], fn: (v?: A) => V): N;
            /** advance every multi-label waiter on this label */
            releaseMulti: (k: S, v: A) => void;
            cancel: (id: N | S) => B;
            wait_and_promise: <T = any>(timeoutMs: N, key: S, isOpen: B, current: A) => Promise<T>;
        };
        defer: {
            (deps: S | S[], fn: (...v: A[]) => A): N;
            provide: (k: S | Record<S, A>, v?: A) => void;
            resolve: (k: S) => void;
            invalidate: (k: S) => B;
            has: (k: S) => B;
            get: <T = any>(k: S) => OPT<T>;
            cancel: (id: N) => B;
            ready: (task: DeferredTask) => B;
            drain: () => V;
            reportError: (task: DeferredTask, e: A) => void;
            inspect: () => R;
            clear: () => void;
            onError: (e: A, id: N, deps: S[]) => void;
            onSuccess: (id: N, deps: S[]) => void;
        };
        detect: {
            (): void;
            capability: (name: S) => B;
            bundler: () => S | null;
            firstMatch: (candidates: readonly S[]) => Promise<S | null>;
            all: (candidates: readonly S[]) => Promise<S[]>;
            environment: (env_lib?: S) => void;
            type: (v: unknown) => "Array" | "ArrayBuffer" | "Buffer" | "Promise" | "URL" | "URLSearchParams" | "WeakMap" | "WeakSet" | "array" | "async-iterable" | "bigint" | "boolean" | "date" | "error" | "function" | "iterable" | "iterator" | "map" | "null" | "number" | "object" | "plainObject" | "regexp" | "set" | "string" | "symbol" | "thenable" | "undefined";
            cloudSupport: () => B;
        };
        useEnvState: () => EnvDetectionState & {
            rt: S;
            subChannel: S;
        };
        apparation: any;
        reset: () => void;
    };
}
export {};
