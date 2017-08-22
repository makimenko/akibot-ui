import { Logger, LogRule, LogLevel, LogFactory, ChromeLogAppender } from "akibot-log/dist";

var rules: LogRule[] = [
    { pattern: new RegExp(".*"), logLevel: LogLevel.Trace }
]
export { Logger };
export const logFactory = new LogFactory(new ChromeLogAppender(), rules);
