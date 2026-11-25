import "@the-w1zard/alias_types";
import "@the-w1zard/types";
import "@the-w1zard/dx";
export declare function load(name: string): any;
export declare function loadNamed(name: any, exportName: any): any;
declare const EventEmitter: any;
type FlushCallback = () => V;
export declare const rv: <T>(v: UF<T>) => T;
export declare const sameValue: (a: A, b: A) => B;
export type Subscription<H, T> = (e: M2Event<H, T>) => void;
export declare class M2<H = A, T = A> extends Map<H, T> implements M2I<H, T> {
    #private;
    f: (callbackfn: (value: T, key: H, map: Map<H, T>) => void, thisArg?: any) => void;
    [Symbol.iterator](): MapIterator<[H, T]>;
    on(fn: Subscription<H, T>): () => V;
    off(fn: Subscription<H, T>): V;
    batch(fn: () => V): this;
    s(v: UF<T>, k: H): this;
    mutate(k: H, fn: (old: T, has: true) => T): T | UD;
    d(k: H): B;
    c(): V;
    dv(k: H, deps: AR<H>, fn: (...vals: AR<T>) => T): this;
    dirty(...keys: AR<H>): this;
    g(k: H): T | UD;
    h(k: H): B;
    $debug(limit?: N): this;
    $strict(): this;
    $history(): AR<M2Event<H, T>>;
    $why(k: H): M2Event<H, T> | UD;
    $diff(other: M2<H, T>): {
        add: AR<[H, T]>;
        del: AR<H>;
        chg: AR<[H, T, T]>;
    };
    entries(): MapIterator<[H, T]>;
    keys(): MapIterator<H>;
    values(): MapIterator<T>;
    swap(value: UF<T>, key: H): T | UD;
    take(k: H): T | UD;
    peek(k: H): T | false;
    getOrI(value: UF<T>, k: H): T;
    getOrM(make: () => T, k: H): T;
    update(k: H, fn: (old: T, has: B) => T, initial?: UF<T>): T;
    setIfAbsent(value: UF<T>, k: H): B;
    setIfPresent(value: UF<T>, k: H): B;
    replace(value: UF<T>, k: H): B;
    inc(key: H, by?: N): N;
    touch(k: H): B;
    mapValues<G>(fn: (v: T, k: H) => G): M2I<H, G>;
    mapKeys<G>(fn: (v: T, k: H) => G): M2I<G, T>;
    filterKV(pred: (v: T, k: H) => B): this;
    filterKeys(pred: (v: T, k: H) => B): this;
    partition(pred: (v: T, k: H) => B): [M2I<H, T>, M2I<H, T>];
    find(pred: (v: T, k: H) => B): [H, T] | UD;
    findKey(pred: (v: T, k: H) => B): H | UD;
    findValue(pred: (v: T, k: H) => B): T | UD;
    some(pred: (v: T, k: H) => B): B;
    every(pred: (v: T, k: H) => B): B;
    reduce<G>(fn: (acc: G, v: T, k: H) => G, initial: G): G;
    forEachKV(fn: (v: T, k: H, map: this) => void): void;
    invert(): M2I<T, H>;
    unique<G>(fn?: (v: T, k: H) => G): M2I<G, T>;
    pick(keys: Iterable<H>): M2I<H, T>;
    omit(keys: Iterable<H>): M2I<H, T>;
    merge(other: Iterable<readonly [H, T]>): this;
    clearAndSet(entries: Iterable<readonly [H, T]>): this;
    toObject(): OB<T>;
    toValues(): A2I<T>;
    toKeys(): A2I<H>;
    toArray(): A2I<[H, T]>;
    group<G>(fn: (v: T, k: H) => G): M2I<G, A2<T>>;
    clone(): this;
    equals(other: M2<H, T>): B;
    static fromObject<X extends Record<S, A>>(obj: X): M2<S, X[keyof X]>;
    static fromEntries<H, T>(entries: I<readonly [H, T]>): M2<H, T>;
    static from<H, T>(map: RM<H, T>): M2<H, T>;
}
export declare class O2I<K extends PropertyKey = S, T = A> {
    #private;
    f: (fn: (v: T, k: K, map: this) => void) => void;
    constructor(entries?: I<readonly [K, T]>);
    get(k: K): T | UD;
    set(k: K, v: UF<T>): this;
    has(k: K): B;
    delete(k: K): B;
    clear(): V;
    forEach(fn: (v: T, k: K, map: this) => void): void;
    get length(): N;
    static groupBy<T, K extends PropertyKey>(items: I<T>, fn: (item: T, index: N) => K): O2I<K, A2<T>>;
    get size(): N;
    [Symbol.iterator](): Generator<[K, T]>;
    on(fn: Sub<K, T>): () => V;
    off(fn: Sub<K, T>): V;
    batch(fn: () => V): this;
    s(v: UF<T>, k: K): this;
    mutate(k: K, fn: (old: T, has: true) => T): T | UD;
    d(k: K): B;
    c(): V;
    dv(k: K, deps: AR<K>, fn: (...vals: AR<T>) => T): this;
    dirty(...keys: AR<K>): this;
    g(k: K): T | UD;
    h(k: K): B;
    $debug(limit?: N): this;
    $strict(): this;
    $history(): M2Event<K, T>[];
    $why(k: K): M2Event<K, T> | UD;
    $diff(other: O2I<K, T>): {
        add: AR<[K, T]>;
        del: AR<K>;
        chg: AR<[K, T, T]>;
    };
    entries(): Generator<[K, T]>;
    keys(): Generator<K>;
    values(): Generator<T>;
    swap(value: UF<T>, key: K): T | UD;
    take(k: K): T | UD;
    peek(k: K): T | false;
    getOrI(value: UF<T>, k: K): T;
    getOrM(make: () => T, k: K): T;
    update(k: K, fn: (old: T, has: B) => T, initial?: UF<T>): T;
    setIfAbsent(value: UF<T>, k: K): B;
    setIfPresent(value: UF<T>, k: K): B;
    replace(value: UF<T>, k: K): B;
    inc(key: K, by?: N): N;
    touch(k: K): B;
    mapValues<G>(fn: (v: T, k: K) => G): O2I<K, G>;
    mapKeys<G extends PropertyKey>(fn: (v: T, k: K) => G): O2I<G, T>;
    filterKV(pred: (v: T, k: K) => B): this;
    filterKeys(pred: (v: T, k: K) => B): this;
    partition(pred: (v: T, k: K) => B): [O2I<K, T>, O2I<K, T>];
    find(pred: (v: T, k: K) => B): [K, T] | UD;
    findKey(pred: (v: T, k: K) => B): K | UD;
    findValue(pred: (v: T, k: K) => B): T | UD;
    some(pred: (v: T, k: K) => B): B;
    every(pred: (v: T, k: K) => B): B;
    reduce<G>(fn: (acc: G, v: T, k: K) => G, initial: G): G;
    forEachKV(fn: (v: T, k: K, map: this) => void): void;
    invert(): O2I<A, K>;
    unique<G extends PropertyKey>(fn?: (v: T, k: K) => G): O2I<G, T>;
    pick(keys: Iterable<K>): O2I<K, T>;
    omit(keys: Iterable<K>): O2I<K, T>;
    merge(other: Iterable<readonly [K, T]>): this;
    clearAndSet(entries: Iterable<readonly [K, T]>): this;
    toObject(): OB<T>;
    toObjectFast(): OB<T>;
    snapshot(): OB<T>;
    toJSON(): OB<T>;
    select<G>(fn: (data: Readonly<Record<K, T>>) => G): G;
    patch(partial: Readonly<Partial<Record<K, T>>>): this;
    toValues(): A2I<T>;
    toKeys(): A2I<K>;
    toArray(): A2I<[K, T]>;
    group<G extends PropertyKey>(fn: (v: T, k: K) => G): O2I<G, A2<T>>;
    clone(): this;
    equals(other: O2I<K, T>): B;
    static fromObject<X extends OB<A>>(obj: X): O2I<S, X[keyof X]>;
    static fromEntries<K extends PropertyKey, T>(entries: I<readonly [K, T]>): O2I<K, T>;
    static from<K extends PropertyKey, T>(source: O2I<K, T> | Readonly<Record<K, T>>): O2I<K, T>;
}
export declare class SET2<T = A> extends Set<T> implements SET2<T> {
    s: (value: T) => this;
    take(value: T): T | UD;
    peek(value: T): T | false;
    toggle(value: T): B;
    first(): T | UD;
    last(): T | UD;
    union(other: Iterable<T>): SET2I<T>;
    intersection(other: Iterable<T>): SET2I<T>;
    difference(other: Iterable<T>): SET2I<T>;
    symmetricDifference(other: Iterable<T>): SET2I<T>;
    isSubsetOf(other: Iterable<T>): B;
    isSupersetOf(other: Iterable<T>): B;
    isDisjointFrom(other: Iterable<T>): B;
    equals(other: Iterable<T>): B;
    filter(fn: (v: T, set: this) => B): SET2I<T>;
    map<R>(fn: (v: T, set: this) => R): SET2I<R>;
    partition(fn: (v: T, set: this) => B): [SET2I<T>, SET2I<T>];
    differenceBy<K>(other: Iterable<T>, fn: (v: T) => K): SET2I<T>;
    uniqueBy<K>(fn: (v: T) => K): SET2I<T>;
    find(fn: (v: T, set: this) => B): T | UD;
    every(fn: (v: T, set: this) => B): B;
    some(fn: (v: T, set: this) => B): B;
    reduce<R>(fn: (acc: R, v: T, set: this) => R, initial: R): R;
    addAll(values: Iterable<T>): this;
    deleteAll(values: Iterable<T>): N;
    retainAll(values: Iterable<T>): this;
    update(values: Iterable<T>): this;
    replace(values: Iterable<T>): this;
    swap(a: T, b: T): B;
    clone(): this;
    toArray(): T[];
    toMap<K, R>(fn: (v: T) => readonly [K, R]): M2<K, R>;
    toObject(fn?: (v: T) => S): OB<T>;
    toJSON(): T[];
    static fromArray<T>(values: T[]): SET2I<T>;
    static fromObject<O extends Record<string, A>>(obj: O): SET2I<O[keyof O]>;
    static fromEntries<T>(entries: Iterable<readonly [unknown, T]>): SET2I<T>;
    static from<T>(values: Iterable<T>): SET2I<T>;
}
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
    subscribersOf(keys: S[]): SET2I<FN>;
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
    group(fn: A): O2I<PropertyKey, A2<any>>;
    pick(keys: A): O2I<any, any>;
    omit(keys: A): O2I<any, any>;
    snapshot(): A;
    equals(other: A): boolean;
    snapshotSubs(): O2I<any, any>;
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
