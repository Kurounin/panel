<?php

namespace Pterodactyl\Http\Requests\Api\Client\Servers\Settings;

use Pterodactyl\Models\Server;
use Pterodactyl\Contracts\Http\ClientPermissionsRequest;
use Pterodactyl\Http\Requests\Api\Client\ClientApiRequest;

class RenameServerRequest extends ClientApiRequest implements ClientPermissionsRequest
{
    /**
     * Returns the permissions string indicating which permission should be used to
     * validate that the authenticated user has permission to perform this action aganist
     * the given resource (server).
     *
     * @return string
     */
    public function permission(): string
    {
        return 'settings.rename';
    }

    /**
     * The rules to apply when validating this request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name' => Server::getRules()['name'],
        ];
    }
}
