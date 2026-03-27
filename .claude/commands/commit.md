# Commit

Before committing, follow these steps exactly:

## 1. Update TODO.md and CLAUDE.md

Review what changed and update the docs if needed:

- **TODO.md** — mark completed items as `[x]`, add new items if something notable was introduced, move finished tasks to Done
- **CLAUDE.md** — update if project structure, routes, conventions, or tech stack changed

Stage these files together with the rest of the changes if they were modified.

## 2. Run checks

```bash
pnpm lint && pnpm typecheck && pnpm format
```

Fix any errors before proceeding. Do not commit if checks fail.

## 2. Understand what changed

Run both commands:

```bash
git status
git diff --staged
```

If nothing is staged yet — review `git status` output and stage only the relevant files by name (e.g. `git add src/components/Foo.astro`). Never use `git add -A` or `git add .`.

## 3. Write the commit message

- Language: **English only**
- Format: imperative mood, present tense ("Add feature", not "Added feature")
- Keep it concise — one line is preferred; add a body only if the change is non-obvious
- Do NOT add any `Co-Authored-By` or other trailers to the commit message

## 4. Confirm the message

Before committing, show the proposed commit message and ask:

> Commit message: `"..."`
> Proceed, or suggest a change?

Wait for confirmation or an edited message. Only commit after explicit approval.

## 5. Push

After committing, push to remote:

```bash
git push
```

## 6. Verify

After pushing, run:

```bash
git status
```

Confirm the working tree is clean and the commit was created.
