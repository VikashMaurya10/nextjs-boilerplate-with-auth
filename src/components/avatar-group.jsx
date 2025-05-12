import { Children, cloneElement, useMemo } from 'react';

import { cn } from '@/lib/utils';

const AvatarGroup = ({ className, children, max = 1, spacing = 10, ...props }) => {
  const avatarItems = Children.toArray(children);

  const renderContent = useMemo(() => {
    return (
      <>
        {avatarItems.slice(0, max).map((child, index) => {
          return cloneElement(child, {
            className: cn(child.props.className, 'border-2 border-background'),
            style: { marginLeft: index === 0 ? 0 : -spacing, ...child.props.style },
          });
        })}

        {avatarItems.length > max && (
          <div
            className={cn(
              'relative flex items-center justify-center rounded-full border-2 border-background bg-muted',
              avatarItems[0].props.className
            )}
            style={{ marginLeft: -spacing }}
          >
            <p>+{avatarItems.length - max}</p>
          </div>
        )}
      </>
    );
  }, [avatarItems, max, spacing]);

  return (
    <div className={cn('relative flex', className)} {...props}>
      {renderContent}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
