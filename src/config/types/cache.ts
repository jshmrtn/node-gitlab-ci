type SingleCacheDefinitionWithoutKey = {
    /**
     * @see https://docs.gitlab.com/ee/ci/yaml/#cachepaths
     */
    paths?: string[];
    /**
     * @see https://docs.gitlab.com/ee/ci/yaml/#cacheuntracked
     */
    untracked?: boolean;
    /**
     * @see https://docs.gitlab.com/ee/ci/yaml/#cachepolicy
     */
    policy?: "pull-push" | "push" | "pull";
};

/**
 * @see https://docs.gitlab.com/ee/ci/yaml/#cachekey
 */
type KeyDefinition =
    | string
    | {
          /**
           * @see https://docs.gitlab.com/ee/ci/yaml/#cachekeyfiles
           */
          files: [string] | [string, string];
          /**
           * @see https://docs.gitlab.com/ee/ci/yaml/#cachekeyprefix
           */
          prefix?: string;
      };

/**
 * @see https://docs.gitlab.com/ee/ci/yaml/#cache
 */
type CacheDefinition =
    | (SingleCacheDefinitionWithoutKey & {
          key?: KeyDefinition;
      })
    | Array<
          SingleCacheDefinitionWithoutKey & {
              key: KeyDefinition;
          }
      >;

export { CacheDefinition };
